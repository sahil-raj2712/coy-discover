'use client';

import React from 'react';
import { Flame, RotateCcw, Sparkles, Lightbulb } from 'lucide-react';

interface HeaderProps {
  matchCount: number;
  onReset: () => void;
  onOpenPartA: () => void;
  isResetting?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  matchCount,
  onReset,
  onOpenPartA,
  isResetting = false,
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-coy-dark/80 backdrop-blur-md border-b border-coy-border">
      {/* Brand logo & name */}
      <div className="flex items-center space-x-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-coy-pink to-coy-peach flex items-center justify-center shadow-lg shadow-coy-pink/30">
          <Flame className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <h1 className="text-xl font-bold tracking-tight text-white">coy</h1>
            <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-coy-pink/20 text-coy-pink border border-coy-pink/30">
              Discover
            </span>
          </div>
          <p className="text-[10px] text-coy-muted -mt-0.5">Mutual crushes only</p>
        </div>
      </div>

      {/* Action controls */}
      <div className="flex items-center space-x-2">
        {/* Part A proposals pill */}
        <button
          onClick={onOpenPartA}
          title="View Part A Product Proposals"
          className="flex items-center space-x-1.5 text-xs font-medium px-2.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-pink-300 border border-pink-500/30 hover:bg-pink-500/25 transition-all active:scale-95"
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Part A:</span>
          <span>Proposals</span>
        </button>

        {/* Demo reset button */}
        <button
          onClick={onReset}
          disabled={isResetting}
          title="Reset all swipes and matches for testing"
          className="p-2 rounded-full text-coy-muted hover:text-white hover:bg-white/10 active:scale-95 transition-all disabled:opacity-50"
        >
          <RotateCcw className={`w-4 h-4 ${isResetting ? 'animate-spin' : ''}`} />
        </button>

        {/* Match indicator */}
        {matchCount > 0 && (
          <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-coy-pink/15 border border-coy-pink/30 text-coy-pink text-xs font-semibold animate-pulse">
            <Sparkles className="w-3 h-3 fill-coy-pink" />
            <span>{matchCount}</span>
          </div>
        )}
      </div>
    </header>
  );
};
