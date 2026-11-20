'use client';

import React, { useState } from 'react';
import { PublicProfile } from '@/types';
import { X, Send, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface ChatModalProps {
  profile: PublicProfile | null;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'match';
  text: string;
  time: string;
}

export const ChatModal: React.FC<ChatModalProps> = ({ profile, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'match',
      text: 'Hey! So happy we matched on Coy ✨',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');

  if (!profile) return null;

  const quickIcebreakers = [
    `Saw you go to ${profile.college}! What do you study?`,
    'Coffee date this week? ☕',
    'So... who swiped right first? 😉',
    `Love that you're into ${profile.interests[0] || 'music'}!`,
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText.trim();
    if (!text) return;

    const userMsg: Message = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Simulated human reply after 1 second
    setTimeout(() => {
      const replies = [
        `Haha totally! What's your favorite spot around ${profile.city}?`,
        '100%! I was hoping we would match on Coy 😊',
        'Haha definitely you! But I won\'t complain 😄',
        'Sounds like a plan! Let me know when you\'re free.',
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prev) => [
        ...prev,
        {
          sender: 'match',
          text: randomReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-sm h-[600px] max-h-[90vh] rounded-3xl bg-coy-card border border-coy-border flex flex-col overflow-hidden shadow-2xl">
        {/* Chat Header */}
        <div className="p-3.5 bg-coy-dark border-b border-coy-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-coy-pink/40">
              <img
                src={profile.photos[0]}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                <span>{profile.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              </h4>
              <p className="text-[11px] text-coy-pink truncate max-w-[170px]">
                {profile.college}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-coy-muted hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mutual Match Banner */}
        <div className="px-4 py-2 bg-gradient-to-r from-coy-pink/15 to-purple-500/15 border-b border-coy-border/50 text-[11px] text-center text-pink-200 flex items-center justify-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-coy-pink" />
          <span>You matched! Both of you swiped right on Coy.</span>
        </div>

        {/* Message History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-coy-pink to-coy-rose text-white rounded-tr-none'
                    : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-coy-muted mt-1 px-1">{m.time}</span>
            </div>
          ))}
        </div>

        {/* Quick Icebreaker Suggestions */}
        <div className="px-3 py-2 bg-coy-dark/60 border-t border-coy-border/50 overflow-x-auto flex space-x-2 no-scrollbar">
          {quickIcebreakers.map((icebreaker, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(icebreaker)}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 hover:bg-coy-pink/20 text-[10px] text-white/80 hover:text-pink-200 border border-white/10 hover:border-coy-pink/40 transition-all text-left"
            >
              {icebreaker}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-coy-dark border-t border-coy-border flex items-center space-x-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-coy-muted focus:outline-none focus:border-coy-pink/50 transition-all"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2 rounded-xl bg-coy-pink text-white hover:bg-coy-rose disabled:opacity-40 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
