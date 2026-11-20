'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { PublicProfile } from '@/types';
import { GraduationCap, MapPin, Info, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface ProfileCardProps {
  profile: PublicProfile;
  isTopCard: boolean;
  onSwipe: (action: 'like' | 'pass') => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  isTopCard,
  onSwipe,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);

  // Motion values for gesture tracking
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 250], [-20, 20]);
  const likeOpacity = useTransform(x, [20, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-20, -120], [0, 1]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 110;
    if (info.offset.x > threshold) {
      onSwipe('like');
    } else if (info.offset.x < -threshold) {
      onSwipe('pass');
    }
  };

  const handlePhotoTap = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isRightHalf = clickX > rect.width / 2;

    if (profile.photos.length > 1) {
      if (isRightHalf) {
        setPhotoIndex((prev) => (prev + 1) % profile.photos.length);
      } else {
        setPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length);
      }
    }
  };

  return (
    <motion.div
      style={{
        x: isTopCard ? x : 0,
        rotate: isTopCard ? rotate : 0,
        zIndex: isTopCard ? 10 : 0,
      }}
      drag={isTopCard ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={isTopCard ? handleDragEnd : undefined}
      animate={{ scale: isTopCard ? 1 : 0.96, y: isTopCard ? 0 : 8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-coy-card border border-coy-border/80 select-none cursor-grab active:cursor-grabbing ${
        !isTopCard ? 'pointer-events-none' : ''
      }`}
    >
      {/* Background Image / Carousel */}
      <div
        className="relative w-full h-full bg-cover bg-center cursor-pointer"
        style={{
          backgroundImage: `url(${profile.photos[photoIndex] || profile.photos[0]})`,
        }}
        onClick={handlePhotoTap}
      >
        {/* Photo indicator segments if multiple photos */}
        {profile.photos.length > 1 && (
          <div className="absolute top-3 inset-x-3 z-20 flex space-x-1.5">
            {profile.photos.map((_, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 rounded-full bg-black/40 overflow-hidden backdrop-blur-sm"
              >
                <div
                  className={`h-full transition-all duration-200 ${
                    idx === photoIndex ? 'bg-white' : 'bg-transparent'
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Dynamic LIKE Badge Stamp */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-10 left-6 z-20 pointer-events-none"
        >
          <div className="stamp-like px-4 py-1.5 text-2xl tracking-wider uppercase bg-emerald-950/60 backdrop-blur-md">
            LIKE ❤️
          </div>
        </motion.div>

        {/* Dynamic NOPE Badge Stamp */}
        <motion.div
          style={{ opacity: nopeOpacity }}
          className="absolute top-10 right-6 z-20 pointer-events-none"
        >
          <div className="stamp-pass px-4 py-1.5 text-2xl tracking-wider uppercase bg-rose-950/60 backdrop-blur-md">
            NOPE ✖
          </div>
        </motion.div>

        {/* Gradient shadow scrim overlays for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Profile Content Section */}
        <div
          className={`absolute bottom-0 inset-x-0 p-5 text-white z-20 flex flex-col justify-end transition-all duration-300 ${
            showFullBio ? 'bg-black/90 pt-8 rounded-t-3xl backdrop-blur-md max-h-[85%] overflow-y-auto' : ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Row: Name, Age, Distance */}
          <div className="flex items-baseline justify-between mb-1.5">
            <div className="flex items-center space-x-2.5">
              <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {profile.name}
              </h2>
              <span className="text-xl font-medium text-white/90">{profile.age}</span>
              <span className="w-5 h-5 rounded-full bg-blue-500/80 flex items-center justify-center text-[11px] text-white font-bold" title="Verified Campus Student">
                ✓
              </span>
            </div>

            {/* Toggle Full Bio Button */}
            <button
              onClick={() => setShowFullBio(!showFullBio)}
              className="p-1.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm transition-all"
              title="Toggle Bio Details"
            >
              {showFullBio ? (
                <ChevronDown className="w-5 h-5 text-white" />
              ) : (
                <ChevronUp className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* College & Location Info */}
          <div className="flex flex-col space-y-1 text-xs text-white/90 mb-3">
            <div className="flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4 text-coy-pink shrink-0" />
              <span className="font-medium truncate">{profile.college}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-coy-muted shrink-0" />
              <span>{profile.city}</span>
              <span>•</span>
              <span>{profile.distanceKm} km away</span>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-sm text-white/85 leading-relaxed mb-3.5 line-clamp-2 hover:line-clamp-none transition-all">
            {profile.bio}
          </p>

          {/* Interest Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {profile.interests.map((interest, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-medium text-white/95 border border-white/10"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Expanded extra info if toggled */}
          {showFullBio && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-3 border-t border-white/10 mt-2 space-y-2 text-xs text-white/80"
            >
              <div className="flex items-center space-x-2 text-coy-pink">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold text-white">Coy Campus Verification</span>
              </div>
              <p className="text-[12px] text-white/70 leading-normal">
                Verified student at {profile.college}. Phone number and college domain authenticated.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
