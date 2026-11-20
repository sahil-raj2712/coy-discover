'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { PublicProfile, MatchRecord } from '@/types';
import { Header } from '@/components/Header';
import { BottomNav, TabType } from '@/components/BottomNav';
import { CardDeck } from '@/components/CardDeck';
import { MatchesView } from '@/components/MatchesView';
import { MatchModal } from '@/components/MatchModal';
import { ChatModal } from '@/components/ChatModal';
import { HomePlaceholder } from '@/components/HomePlaceholder';
import { PartASection } from '@/components/PartAModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('discover');
  const [profiles, setProfiles] = useState<PublicProfile[]>([]);
  const [matches, setMatches] = useState<MatchRecord[]>([]);
  const [loadingFeed, setLoadingFeed] = useState<boolean>(true);
  const [loadingMatches, setLoadingMatches] = useState<boolean>(true);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  // Modals
  const [matchedProfile, setMatchedProfile] = useState<PublicProfile | null>(null);
  const [chatProfile, setChatProfile] = useState<PublicProfile | null>(null);

  // Fetch initial feed from API
  const fetchFeed = useCallback(async () => {
    try {
      setLoadingFeed(true);
      const res = await fetch('/api/feed');
      const data = await res.json();
      if (data.success && Array.isArray(data.profiles)) {
        setProfiles(data.profiles);
      }
    } catch (err) {
      console.error('Failed to load feed:', err);
    } finally {
      setLoadingFeed(false);
    }
  }, []);

  // Fetch mutual matches from API
  const fetchMatches = useCallback(async () => {
    try {
      setLoadingMatches(true);
      const res = await fetch('/api/matches');
      const data = await res.json();
      if (data.success && Array.isArray(data.matches)) {
        setMatches(data.matches);
      }
    } catch (err) {
      console.error('Failed to load matches:', err);
    } finally {
      setLoadingMatches(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed();
    fetchMatches();
  }, [fetchFeed, fetchMatches]);

  // Handle Swipe Action
  const handleSwipe = async (action: 'like' | 'pass') => {
    if (profiles.length === 0) return;

    const current = profiles[0];

    // Optimistically remove top card from deck
    setProfiles((prev) => prev.slice(1));

    try {
      const res = await fetch('/api/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profileId: current.id,
          action,
        }),
      });

      const data = await res.json();

      if (data.success && data.matched && data.match) {
        // Trigger celebratory match modal!
        setMatchedProfile(data.match);
        // Refresh matches
        fetchMatches();
      }
    } catch (error) {
      console.error('Error recording swipe:', error);
    }
  };

  // Reset Demo Store
  const handleReset = async () => {
    try {
      setIsResetting(true);
      const res = await fetch('/api/reset', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        await Promise.all([fetchFeed(), fetchMatches()]);
        setActiveTab('discover');
      }
    } catch (err) {
      console.error('Error resetting demo:', err);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <main className="min-h-screen bg-coy-dark flex items-center justify-center sm:py-6 px-0 sm:px-4">
      {/* Mobile-first frame container */}
      <div className="w-full sm:max-w-md h-screen sm:h-[880px] bg-[#14141c] sm:rounded-[40px] border-0 sm:border sm:border-coy-border shadow-2xl flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <Header
          matchCount={matches.length}
          onReset={handleReset}
          onOpenPartA={() => setActiveTab('part-a')}
          isResetting={isResetting}
        />

        {/* Dynamic Tab Body */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'home' && (
            <HomePlaceholder onGoToDiscover={() => setActiveTab('discover')} />
          )}

          {activeTab === 'discover' && (
            <CardDeck
              profiles={profiles}
              loading={loadingFeed}
              onSwipe={handleSwipe}
              onReset={handleReset}
            />
          )}

          {activeTab === 'matches' && (
            <MatchesView
              matches={matches}
              loading={loadingMatches}
              onSelectMatch={(profile) => setChatProfile(profile)}
              onGoToDiscover={() => setActiveTab('discover')}
            />
          )}

          {activeTab === 'part-a' && <PartASection />}
        </div>

        {/* Bottom Navigation */}
        <BottomNav
          currentTab={activeTab}
          onChangeTab={setActiveTab}
          matchCount={matches.length}
        />

        {/* Celebratory Match Modal */}
        <MatchModal
          matchedProfile={matchedProfile}
          onClose={() => setMatchedProfile(null)}
          onStartChat={(profile) => {
            setMatchedProfile(null);
            setChatProfile(profile);
          }}
        />

        {/* Interactive Chat Modal */}
        <ChatModal
          profile={chatProfile}
          onClose={() => setChatProfile(null)}
        />
      </div>
    </main>
  );
}
