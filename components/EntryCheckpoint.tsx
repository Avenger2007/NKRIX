'use client';

import { useState, useEffect, useCallback } from 'react';

interface EntryCheckpointProps {
  onClearanceGranted: () => void;
}

export default function EntryCheckpoint({ onClearanceGranted }: EntryCheckpointProps) {
  const [stage, setStage] = useState<'greeting' | 'purpose' | 'verification' | 'granted'>('greeting');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'atlas' | 'user'; content: string }>>([]);
  const [visitorName, setVisitorName] = useState('');
  const [purpose, setPurpose] = useState('');

  const addMessage = useCallback((role: 'atlas' | 'user', content: string) => {
    setMessages(prev => [...prev, { role, content }]);
  }, []);

  // Initial greeting
  useEffect(() => {
    setTimeout(() => {
      addMessage('atlas', 
        "🇮🇳 JAI HIND, VISITOR!\n\n" +
        "This is Wing Commander ATLAS, Security Officer at this Command Post.\n\n" +
        "You are attempting to access a restricted military cantonment. " +
        "Before granting entry clearance, I must verify your credentials and intent.\n\n" +
        "State your name, Sahib:"
      );
    }, 500);
  }, [addMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    addMessage('user', userInput);
    setInput('');

    setTimeout(() => {
      processInput(userInput);
    }, 800);
  };

  const processInput = (userInput: string) => {
    switch (stage) {
      case 'greeting':
        setVisitorName(userInput);
        addMessage('atlas',
          `Acknowledged, ${userInput} Sahib.\n\n` +
          "Now, state your purpose for accessing this cantonment:\n\n" +
          "1️⃣ Looking to hire a developer (Recruitment)\n" +
          "2️⃣ Fellow developer/professional (Peer Review)\n" +
          "3️⃣ Recruiter/Hiring Manager (Talent Acquisition)\n" +
          "4️⃣ General reconnaissance (Casual Visit)\n\n" +
          "Reply with number or describe your purpose:"
        );
        setStage('purpose');
        break;

      case 'purpose':
        setPurpose(userInput);
        const purposeType = identifyPurpose(userInput);
        
        addMessage('atlas',
          `Roger that, ${visitorName} Sahib.\n\n` +
          `Purpose: ${purposeType}\n\n` +
          "Verifying credentials...\n" +
          "━━━━━━━━━━━━━━━━━━━━\n" +
          "✓ Identity Confirmed\n" +
          "✓ Threat Assessment: Clear\n" +
          "✓ Access Protocol: Initialized\n" +
          "━━━━━━━━━━━━━━━━━━━━\n\n" +
          "CLEARANCE GRANTED ✓\n\n" +
          "Welcome to the Command Post, " + visitorName + " Sahib. " +
          "Wing Commander ATLAS will remain on standby to assist your reconnaissance.\n\n" +
          "JAI HIND! 🇮🇳"
        );
        setStage('verification');
        
        setTimeout(() => {
          setStage('granted');
          setTimeout(() => {
            onClearanceGranted();
          }, 1500);
        }, 3000);
        break;
    }
  };

  const identifyPurpose = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes('1') || lower.includes('hire') || lower.includes('project') || lower.includes('work')) {
      return 'Client/Project Recruitment';
    } else if (lower.includes('2') || lower.includes('developer') || lower.includes('engineer') || lower.includes('peer')) {
      return 'Professional Peer Review';
    } else if (lower.includes('3') || lower.includes('recruit') || lower.includes('hiring') || lower.includes('hr')) {
      return 'Talent Acquisition Officer';
    } else if (lower.includes('4') || lower.includes('casual') || lower.includes('browse') || lower.includes('look')) {
      return 'General Reconnaissance';
    }
    return input;
  };

  const handleQuickSelect = (option: string, displayText: string) => {
    addMessage('user', displayText);
    setInput('');
    setTimeout(() => {
      processInput(option);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(107,124,89,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(107,124,89,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Main checkpoint interface */}
      <div className="scanline relative z-10 w-full max-w-3xl border border-[#6b7c59] bg-[#0a0a0a]/95 p-8 shadow-2xl backdrop-blur-sm lg:p-12">
        {/* Header */}
        <div className="mb-8 border-b border-[#6b7c59]/30 pb-6 text-center">
          <div className="mb-4 inline-block border border-[#c1440e] bg-[#c1440e]/10 px-4 py-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c1440e]">
              🔒 RESTRICTED CANTONMENT - SECURITY CHECKPOINT
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center border-2 border-[#d4af37] bg-[#d4af37]/10">
              <span className="text-3xl">🎖️</span>
            </div>
            <div className="text-left">
              <div className="font-mono text-sm uppercase tracking-wide text-[#6b7c59]">
                Security Officer
              </div>
              <div className="font-mono text-2xl font-bold uppercase text-[#e8e8e8]">
                Wg Cdr ATLAS
              </div>
              <div className="flex items-center gap-2">
                <span className="status-pulse h-2 w-2 rounded-full bg-[#39ff14]"></span>
                <span className="font-mono text-xs uppercase text-[#39ff14]">
                  On Duty
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="mb-6 max-h-[400px] space-y-4 overflow-y-auto pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border ${
                  msg.role === 'user'
                    ? 'border-[#2d5f7f] bg-[#2d5f7f]/20'
                    : 'border-[#d4af37] bg-[#d4af37]/10'
                }`}
              >
                <span className="text-lg">
                  {msg.role === 'user' ? '👤' : '🎖️'}
                </span>
              </div>
              <div
                className={`flex-1 rounded border p-4 font-mono text-sm ${
                  msg.role === 'user'
                    ? 'border-[#2d5f7f] bg-[#2d5f7f]/10 text-[#e8e8e8]'
                    : 'border-[#6b7c59]/30 bg-[#4a5c3a]/10 text-[#c3b091]'
                }`}
              >
                {msg.content.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Input or Quick Actions */}
        {stage !== 'granted' && (
          <div>
            {stage === 'purpose' && (
              <div className="mb-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleQuickSelect('1', '1️⃣ Looking to hire')}
                  className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-4 py-3 font-mono text-sm text-[#c3b091] transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  1️⃣ Hire Developer
                </button>
                <button
                  onClick={() => handleQuickSelect('2', '2️⃣ Fellow developer')}
                  className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-4 py-3 font-mono text-sm text-[#c3b091] transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  2️⃣ Peer Review
                </button>
                <button
                  onClick={() => handleQuickSelect('3', '3️⃣ Recruiter')}
                  className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-4 py-3 font-mono text-sm text-[#c3b091] transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  3️⃣ Recruiter/HR
                </button>
                <button
                  onClick={() => handleQuickSelect('4', '4️⃣ Just browsing')}
                  className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-4 py-3 font-mono text-sm text-[#c3b091] transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  4️⃣ Casual Visit
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                placeholder={
                  stage === 'greeting'
                    ? 'Enter your name...'
                    : stage === 'purpose'
                    ? 'Enter number or describe...'
                    : 'Awaiting clearance...'
                }
                disabled={stage !== 'greeting' && stage !== 'purpose'}
                className="flex-1 border border-[#6b7c59]/30 bg-[#0a0a0a]/50 px-4 py-3 font-mono text-sm text-[#e8e8e8] placeholder:text-[#6b7c59] focus:border-[#d4af37] focus:outline-none disabled:opacity-50"
                autoFocus
              />
              <button
                type="submit"
                disabled={!input.trim() || (stage !== 'greeting' && stage !== 'purpose')}
                className="border border-[#d4af37] bg-[#d4af37]/20 px-6 py-3 font-mono text-sm font-bold uppercase text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0a0a0a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {stage === 'verification' && (
          <div className="flex items-center justify-center gap-2 py-4 font-mono text-sm text-[#d4af37]">
            <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37]"></span>
            <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37] [animation-delay:200ms]"></span>
            <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37] [animation-delay:400ms]"></span>
            <span className="ml-2">Processing clearance...</span>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 border-t border-[#6b7c59]/30 pt-4 text-center font-mono text-xs text-[#6b7c59]">
          🇮🇳 Indian Armed Forces Protocol • Command Post Access Control v2.0
        </div>
      </div>
    </div>
  );
}
