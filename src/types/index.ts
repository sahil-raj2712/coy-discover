export interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'female' | 'male' | 'non-binary';
  photos: string[];
  bio: string;
  college: string;
  city: string;
  distanceKm: number;
  interests: string[];
  jobTitle?: string;
  instagram?: string;
  hasLikedUser: boolean; // Hidden from API responses until mutual match
}

// Public representation sent to client (hasLikedUser is intentionally stripped)
export type PublicProfile = Omit<Profile, 'hasLikedUser'>;

export interface SwipeRecord {
  profileId: string;
  action: 'like' | 'pass';
  timestamp: string;
}

export interface MatchRecord {
  profileId: string;
  matchedAt: string;
  lastMessage?: string;
  profile: PublicProfile;
}

export interface AppState {
  swipes: Record<string, SwipeRecord>; // profileId -> SwipeRecord
  matches: Record<string, MatchRecord>; // profileId -> MatchRecord
}
