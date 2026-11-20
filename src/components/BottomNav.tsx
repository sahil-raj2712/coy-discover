'use client';

import React from 'react';
import { Home, Compass, Heart, FileText } from 'lucide-react';

export type TabType = 'home' | 'discover' | 'matches' | 'part-a';

interface BottomNavProps {
  currentTab: TabType;
  onChangeTab: (tab: TabType) => void;
  matchCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onChangeTab,
  matchCount,
}) => {
  const tabs = [
    {
      id: 'home' as TabType,
      label: 'Home',
      icon: Home,
      badge: null,
    },
    {
      id: 'discover' as TabType,
      label: 'Discover',
      icon: Compass,
      badge: null,
    },
    {
      id: 'matches' as TabType,
      label: 'Matches',
      icon: Heart,
      badge: matchCount > 0 ? matchCount : null,
    },
    {
      id: 'part-a' as TabType,
      label: 'Part A',
      icon: FileText,
      badge: null,
    },
  ];

  return (
    <nav className="sticky bottom-0 z-30 w-full bg-coy-dark/90 backdrop-blur-lg border-t border-coy-border px-4 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-coy-pink scale-105'
                  : 'text-coy-muted hover:text-white/80'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-6 h-6 transition-transform ${
                    isActive ? 'fill-coy-pink/20 stroke-[2.2]' : 'stroke-[1.8]'
                  }`}
                />
                {tab.badge !== null && (
                  <span className="absolute -top-1.5 -right-2.5 px-1.5 py-0.2 bg-gradient-to-r from-coy-pink to-coy-rose text-white text-[10px] font-bold rounded-full min-w-4 text-center shadow-md animate-bounce">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[11px] font-medium mt-1 tracking-tight ${
                  isActive ? 'text-white font-semibold' : 'text-coy-muted'
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-1 w-5 h-0.5 bg-gradient-to-r from-coy-pink to-coy-peach rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
