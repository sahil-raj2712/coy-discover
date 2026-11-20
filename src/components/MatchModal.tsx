'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PublicProfile } from '@/types';
import confetti from 'canvas-confetti';
import { Heart, MessageCircle, Sparkles, X } from 'lucide-react';

interface MatchModalProps {
  matchedProfile: PublicProfile | null;
  onClose: () => void;
  onStartChat: (profile: PublicProfile) => void;
}

export const MatchModal: React.FC<MatchModalProps> = ({
  matchedProfile,
  onClose,
  onStartChat,
}) => {
  useEffect(() => {
    if (matchedProfile) {
      // Fire celebratory confetti bursts
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF3366', '#FF6B6B', '#7C3AED', '#ffffff', '#22C55E'],
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [matchedProfile]);

  if (!matchedProfile) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-coy-card via-[#16161f] to-coy-dark border border-coy-pink/40 p-6 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle glow background */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-coy-pink/30 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-coy-pink/20 text-coy-pink text-xs font-semibold uppercase tracking-wider mb-2 border border-coy-pink/30">
            <Sparkles className="w-3.5 h-3.5 fill-coy-pink" />
            <span>Mutual Connection</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-1">
            It&apos;s a Match!
          </h2>
          <p className="text-sm text-coy-muted mb-6">
            You and <span className="text-white font-semibold">{matchedProfile.name}</span> liked each other.
          </p>

          {/* Avatars side-by-side with heart */}
          <div className="relative flex items-center justify-center space-x-4 mb-6">
            {/* User photo */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-3 border-coy-pink overflow-hidden shadow-lg shadow-coy-pink/25">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
                  alt="You"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-coy-dark text-[10px] text-white border border-white/20">
                You
              </span>
            </div>

            {/* Glowing Heart bridge */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-coy-pink to-coy-rose flex items-center justify-center shadow-lg shadow-coy-pink/50 animate-pulse">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>

            {/* Matched person photo */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-3 border-coy-pink overflow-hidden shadow-lg shadow-coy-pink/25">
                <img
                  src={matchedProfile.photos[0]}
                  alt={matchedProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-coy-dark text-[10px] text-white border border-white/20">
                {matchedProfile.name.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* College info banner */}
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs text-white/80">
            🎓 {matchedProfile.college} • {matchedProfile.city}
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {
                onStartChat(matchedProfile);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-gradient-to-r from-coy-pink via-coy-rose to-purple-600 text-white font-bold text-sm shadow-xl shadow-coy-pink/30 hover:opacity-95 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send a Message</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white/80 font-medium text-sm transition-all"
            >
              Keep Swiping
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
