'use client';

import React from 'react';
import { Compass, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HomePlaceholderProps {
  onGoToDiscover: () => void;
}

export const HomePlaceholder: React.FC<HomePlaceholderProps> = ({ onGoToDiscover }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-sm mx-auto">
      {/* Branding graphic */}
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-coy-pink to-coy-peach flex items-center justify-center shadow-xl shadow-coy-pink/20 mb-6">
        <Flame className="w-10 h-10 text-white fill-white" />
      </div>

      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-coy-pink font-semibold uppercase tracking-wider mb-2">
        Placeholder Home Tab
      </span>

      <h2 className="text-2xl font-extrabold text-white mb-2">
        Coy Core Crush Hub
      </h2>

      <p className="text-xs text-coy-muted leading-relaxed mb-6">
        Per the assignment instructions, this Home tab is kept blank as a placeholder for Coy&apos;s existing secret crush phone & invite features. All new swipe-based discovery logic is built inside the <strong className="text-white">Discover</strong> tab.
      </p>

      {/* Feature cards previewing Coy's identity */}
      <div className="w-full space-y-2.5 mb-8 text-left">
        <div className="p-3 rounded-2xl bg-coy-card border border-coy-border/80 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-pink-500/10 text-coy-pink shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">100% Secret & Anonymous</h4>
            <p className="text-[11px] text-coy-muted">No one knows you like them unless they like you back.</p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-coy-card border border-coy-border/80 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">Campus-First Network</h4>
            <p className="text-[11px] text-coy-muted">Connect exclusively with verified peers across your university.</p>
          </div>
        </div>
      </div>

      <button
        onClick={onGoToDiscover}
        className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-gradient-to-r from-coy-pink via-coy-rose to-purple-600 text-white font-bold text-sm shadow-xl shadow-coy-pink/25 hover:opacity-95 active:scale-95 transition-all"
      >
        <Compass className="w-4 h-4" />
        <span>Explore the New &ldquo;Discover&rdquo; Tab</span>
      </button>
    </div>
  );
};
