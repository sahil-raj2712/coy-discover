'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PublicProfile } from '@/types';
import { ProfileCard } from './ProfileCard';
import { X, Heart, RotateCcw, Sparkles } from 'lucide-react';

interface CardDeckProps {
  profiles: PublicProfile[];
  loading: boolean;
  onSwipe: (action: 'like' | 'pass') => void;
  onReset: () => void;
}

export const CardDeck: React.FC<CardDeckProps> = ({
  profiles,
  loading,
  onSwipe,
  onReset,
}) => {
  const currentProfile = profiles[0];
  const nextProfile = profiles[1];

  // Desktop keyboard shortcuts: Left = Pass, Right = Like
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentProfile) return;
      if (e.key === 'ArrowLeft') {
        onSwipe('pass');
      } else if (e.key === 'ArrowRight') {
        onSwipe('like');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentProfile, onSwipe]);

  if (loading) {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full border-4 border-coy-pink/20 border-t-coy-pink animate-spin mb-4" />
        <p className="text-white/80 font-medium">Finding potential crushes near you...</p>
        <p className="text-xs text-coy-muted mt-1">Filtering unswiped campus profiles</p>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-coy-pink/20 to-purple-500/20 border border-coy-pink/30 flex items-center justify-center mb-6 shadow-xl shadow-coy-pink/10">
          <Sparkles className="w-12 h-12 text-coy-pink" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You&apos;re All Caught Up!</h3>
        <p className="text-sm text-coy-muted max-w-xs mb-8 leading-relaxed">
          You&apos;ve reviewed all available profiles in your campus network. Come back later or reset the demo deck to test again.
        </p>

        <button
          onClick={onReset}
          className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-coy-pink to-coy-rose text-white font-semibold shadow-lg shadow-coy-pink/25 hover:opacity-95 active:scale-95 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Demo Deck (30 Profiles)</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 px-4 max-w-sm mx-auto">
      {/* Cards container area */}
      <div className="relative w-full aspect-[3/4.4] max-h-[580px] my-auto">
        <AnimatePresence>
          {/* Next Card underneath (for realistic deck depth) */}
          {nextProfile && (
            <ProfileCard
              key={nextProfile.id}
              profile={nextProfile}
              isTopCard={false}
              onSwipe={() => {}}
            />
          )}

          {/* Active Top Card */}
          {currentProfile && (
            <ProfileCard
              key={currentProfile.id}
              profile={currentProfile}
              isTopCard={true}
              onSwipe={onSwipe}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Swipe Control Buttons */}
      <div className="flex items-center justify-center space-x-6 py-4">
        {/* Pass Button */}
        <button
          onClick={() => onSwipe('pass')}
          aria-label="Pass"
          title="Pass (Swipe Left / Arrow Left)"
          className="w-16 h-16 rounded-full bg-coy-card border-2 border-rose-500/30 flex items-center justify-center text-rose-400 hover:text-rose-300 hover:border-rose-500 hover:bg-rose-500/10 active:scale-90 transition-all shadow-lg shadow-black/40 group"
        >
          <X className="w-8 h-8 transition-transform group-hover:scale-110" />
        </button>

        {/* Counter Pill */}
        <div className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-coy-muted font-medium">
          {profiles.length} left
        </div>

        {/* Like Button */}
        <button
          onClick={() => onSwipe('like')}
          aria-label="Like"
          title="Like (Swipe Right / Arrow Right)"
          className="w-16 h-16 rounded-full bg-coy-card border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/10 active:scale-90 transition-all shadow-lg shadow-black/40 group"
        >
          <Heart className="w-8 h-8 fill-emerald-400/20 group-hover:fill-emerald-400/40 transition-transform group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
};
