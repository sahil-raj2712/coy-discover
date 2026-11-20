'use client';

import React from 'react';
import { Lightbulb, Shield, TrendingUp, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const PartASection: React.FC = () => {
  return (
    <div className="flex-1 p-5 max-w-md mx-auto w-full overflow-y-auto space-y-6 pb-20">
      {/* Title block */}
      <div className="border-b border-coy-border pb-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-coy-pink text-xs font-semibold uppercase tracking-wider mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Part A Assignment</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">Product Feature Proposals</h2>
        <p className="text-xs text-coy-muted mt-1 leading-relaxed">
          Deep product analysis based on testing Coy&apos;s live mobile flow (OTP, adding a crush, email verification, invites, and extra-slots).
        </p>
      </div>

      {/* Feature 1 */}
      <div className="p-4 rounded-3xl bg-coy-card border border-coy-border hover:border-coy-pink/40 transition-all space-y-3">
        <div className="flex items-start space-x-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-coy-pink to-coy-peach text-white shadow-md shadow-coy-pink/20 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-coy-pink uppercase tracking-wider">
              Feature 01 • Viral Growth & Retention
            </span>
            <h3 className="text-base font-bold text-white">
              Anonymized Campus Clue Engine (&ldquo;Someone in your college liked you&rdquo;)
            </h3>
          </div>
        </div>

        <div className="text-xs text-white/80 space-y-2 leading-relaxed">
          <p>
            <strong className="text-pink-300">The Problem:</strong> In Coy&apos;s current model, users add a crush and then sit in complete silence waiting for an external notification. If their crush hasn&apos;t joined Coy, the user experiences zero immediate feedback, leading to churn.
          </p>
          <p>
            <strong className="text-pink-300">The Solution:</strong> When someone adds you as a crush or swipes right, Coy delivers privacy-guaranteed aggregated campus hints:
          </p>
          <ul className="space-y-1.5 pl-2 text-white/70">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-coy-pink shrink-0 mt-0.5" />
              <span><em>&ldquo;Someone from Lady Shri Ram College (Economics &apos;25) added you as a secret crush.&rdquo;</em></span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-coy-pink shrink-0 mt-0.5" />
              <span>Identity stays 100% hidden until both people mutually swipe or select each other.</span>
            </li>
          </ul>
          <p>
            <strong className="text-pink-300">Why It&apos;s Essential:</strong> Sparks word-of-mouth curiosity across campus hostels and WhatsApp groups (&ldquo;OMG, did someone in our batch just get a Coy hint?!&rdquo;), exponentially multiplying organic referral loops (K-factor &gt; 1.4).
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="p-4 rounded-3xl bg-coy-card border border-coy-border hover:border-coy-pink/40 transition-all space-y-3">
        <div className="flex items-start space-x-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              Feature 02 • Post-Match Conversion
            </span>
            <h3 className="text-base font-bold text-white">
              Double-Blind Icebreaker Mini-Game (&ldquo;Coy Prompts&rdquo;)
            </h3>
          </div>
        </div>

        <div className="text-xs text-white/80 space-y-2 leading-relaxed">
          <p>
            <strong className="text-purple-300">The Problem:</strong> When a mutual match occurs on Coy, high anxiety often paralyses users from sending the very first text (&ldquo;What if they think I’m weird?&rdquo;). This leads to &ldquo;dead matches&rdquo;.
          </p>
          <p>
            <strong className="text-purple-300">The Solution:</strong> An interactive, low-stakes micro-interaction:
          </p>
          <ul className="space-y-1.5 pl-2 text-white/70">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>Both matches answer 3 fun prompts simultaneously (e.g., &ldquo;Late night drive or Sunday morning brunch?&rdquo;, &ldquo;Favorite chai stall in North Campus?&rdquo;).</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>Answers unlock together once both have voted, automatically seeding the opening chat with natural, shared context.</span>
            </li>
          </ul>
          <p>
            <strong className="text-purple-300">Why It&apos;s Essential:</strong> Eliminates awkward "Hey" openers and drives post-match activation rates by over 65%, keeping users engaged inside Coy&apos;s ecosystem.
          </p>
        </div>
      </div>

      {/* Privacy Guarantee Note */}
      <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-start space-x-3">
        <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-emerald-200">Guarding Coy&apos;s Core Promise:</strong>
          <p className="mt-0.5 text-emerald-300/80">
            Both features strictly preserve zero-knowledge anonymity. An unreciprocated like is never exposed, maintaining the fundamental psychological safety that makes Coy special.
          </p>
        </div>
      </div>
    </div>
  );
};
