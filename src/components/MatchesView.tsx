'use client';

import React from 'react';
import { MatchRecord, PublicProfile } from '@/types';
import { MessageCircle, Heart, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface MatchesViewProps {
  matches: MatchRecord[];
  loading: boolean;
  onSelectMatch: (profile: PublicProfile) => void;
  onGoToDiscover: () => void;
}

export const MatchesView: React.FC<MatchesViewProps> = ({
  matches,
  loading,
  onSelectMatch,
  onGoToDiscover,
}) => {
  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full border-4 border-coy-pink/20 border-t-coy-pink animate-spin mb-3" />
        <p className="text-white/80 text-sm">Loading your mutual matches...</p>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-sm mx-auto">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-coy-pink/15 to-purple-500/15 border border-coy-pink/30 flex items-center justify-center mb-5">
          <Heart className="w-10 h-10 text-coy-pink fill-coy-pink/20" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Mutual Matches Yet</h3>
        <p className="text-sm text-coy-muted mb-6 leading-relaxed">
          Remember Coy&apos;s rule: neither person knows until it&apos;s mutual! Swipe right on profiles in Discover to unlock connections.
        </p>
        <button
          onClick={onGoToDiscover}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-coy-pink to-coy-rose text-white text-sm font-semibold shadow-lg shadow-coy-pink/20 hover:opacity-95 active:scale-95 transition-all"
        >
          Go to Discover
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 max-w-md mx-auto w-full overflow-y-auto">
      {/* Header section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>Your Matches</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-coy-pink/20 text-coy-pink font-semibold border border-coy-pink/30">
              {matches.length}
            </span>
          </h2>
          <p className="text-xs text-coy-muted mt-0.5">
            People who liked you back on Coy
          </p>
        </div>
      </div>

      {/* Horizontal Story-style Avatars */}
      <div className="mb-6 overflow-x-auto pb-2 flex space-x-4">
        {matches.map((m) => (
          <button
            key={m.profileId}
            onClick={() => onSelectMatch(m.profile)}
            className="flex flex-col items-center shrink-0 group focus:outline-none"
          >
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-coy-pink via-purple-500 to-amber-400 group-hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-coy-dark">
                <img
                  src={m.profile.photos[0]}
                  alt={m.profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-coy-dark" />
            </div>
            <span className="text-xs text-white/90 font-medium mt-1.5 max-w-[68px] truncate">
              {m.profile.name.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Vertical Detailed Match Cards */}
      <div className="space-y-3">
        {matches.map((m) => {
          const matchedDate = new Date(m.matchedAt);
          const timeString = matchedDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <div
              key={m.profileId}
              onClick={() => onSelectMatch(m.profile)}
              className="p-3.5 rounded-2xl bg-coy-card border border-coy-border hover:border-coy-pink/50 transition-all flex items-center space-x-3.5 cursor-pointer group active:scale-[0.99]"
            >
              {/* Profile Image */}
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img
                  src={m.profile.photos[0]}
                  alt={m.profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Match info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white truncate flex items-center space-x-1.5">
                    <span>{m.profile.name}</span>
                    <span className="text-xs text-coy-muted font-normal">{m.profile.age}</span>
                  </h4>
                  <span className="text-[11px] text-coy-muted">{timeString}</span>
                </div>

                <div className="flex items-center space-x-1 text-xs text-coy-pink font-medium truncate mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{m.profile.college}</span>
                </div>

                <p className="text-xs text-white/60 truncate mt-1">
                  &ldquo;{m.profile.bio}&rdquo;
                </p>
              </div>

              {/* Chat action button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectMatch(m.profile);
                }}
                className="p-2.5 rounded-xl bg-coy-pink/15 group-hover:bg-coy-pink text-coy-pink group-hover:text-white transition-all shrink-0"
                title="Message"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
