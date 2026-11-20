import fs from 'fs';
import path from 'path';
import { Profile, PublicProfile, SwipeRecord, MatchRecord, AppState } from '@/types';
import { INITIAL_PROFILES } from './seedProfiles';

const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'coy_store.json');

// Ensure data directory and store file exist
function getStore(): AppState {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(STORE_FILE)) {
      const initial: AppState = { swipes: {}, matches: {} };
      fs.writeFileSync(STORE_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(STORE_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading Coy store:', error);
    return { swipes: {}, matches: {} };
  }
}

function saveStore(state: AppState): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STORE_FILE, JSON.stringify(state, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving Coy store:', error);
  }
}

/**
 * Strips sensitive privacy fields (specifically `hasLikedUser`)
 * so the frontend never knows if someone liked the user until a mutual match.
 */
function sanitizeProfile(profile: Profile): PublicProfile {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hasLikedUser, ...rest } = profile;
  return rest;
}

/**
 * Returns all profiles that the current user has NOT yet swiped on.
 * Strictly redacts `hasLikedUser` from every profile.
 */
export function getFeed(): PublicProfile[] {
  const store = getStore();
  const swipedIds = new Set(Object.keys(store.swipes));

  return INITIAL_PROFILES
    .filter((profile) => !swipedIds.has(profile.id))
    .map(sanitizeProfile);
}

/**
 * Records a like or pass action for a profile.
 * If the user liked the profile and that profile has `hasLikedUser === true`,
 * an authentic mutual match is triggered and persisted.
 */
export function recordSwipe(
  profileId: string,
  action: 'like' | 'pass'
): { success: boolean; matched: boolean; match?: PublicProfile } {
  const store = getStore();
  const profile = INITIAL_PROFILES.find((p) => p.id === profileId);

  if (!profile) {
    return { success: false, matched: false };
  }

  // Persist the swipe action
  const swipeRecord: SwipeRecord = {
    profileId,
    action,
    timestamp: new Date().toISOString(),
  };
  store.swipes[profileId] = swipeRecord;

  let isMatch = false;
  const publicProfile = sanitizeProfile(profile);

  // Core Coy Rule: Match ONLY happens if both users liked each other
  if (action === 'like' && profile.hasLikedUser) {
    isMatch = true;
    const matchRecord: MatchRecord = {
      profileId,
      matchedAt: new Date().toISOString(),
      profile: publicProfile,
    };
    store.matches[profileId] = matchRecord;
  }

  saveStore(store);

  return {
    success: true,
    matched: isMatch,
    match: isMatch ? publicProfile : undefined,
  };
}

/**
 * Returns all recorded mutual matches.
 */
export function getMatches(): MatchRecord[] {
  const store = getStore();
  return Object.values(store.matches).sort(
    (a, b) => new Date(b.matchedAt).getTime() - new Date(a.matchedAt).getTime()
  );
}

/**
 * Reset demo helper: clears all swipes and matches.
 */
export function resetDemo(): { success: boolean; totalProfiles: number } {
  const initial: AppState = { swipes: {}, matches: {} };
  saveStore(initial);
  return { success: true, totalProfiles: INITIAL_PROFILES.length };
}
