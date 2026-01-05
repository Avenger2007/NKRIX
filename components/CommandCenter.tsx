'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Message, QuickAction } from '@/lib/types/chat';

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    { id: 'projects', label: 'View Projects', action: 'show_projects', icon: '⚔️' },
    { id: 'skills', label: 'Skills', action: 'show_skills', icon: '🎯' },
    { id: 'hire', label: 'Hire Me', action: 'contact', icon: '📋' },
  ];

  const addAtlasMessage = useCallback((content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: `${Date.now()}-${Math.random()}`,
        role: 'assistant',
        content,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 1000);
  }, []);

  // Initial greeting after 3 seconds
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        addAtlasMessage(
          "Greetings, visitor. I'm Commander ATLAS, Assistant Commandant of this tactical operations center.\n\nWhat brings you to our command center today?"
        );
        setHasInteracted(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted, addAtlasMessage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const currentInput = input;
    setInput('');

    // Add user message
    setMessages((prev) => [...prev, {
      id: `${Date.now()}-${Math.random()}`,
      role: 'user',
      content: currentInput,
      timestamp: new Date(),
    }]);

    // Simulate AI response (we'll connect real AI later)
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(currentInput);
      addAtlasMessage(response);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'show_projects':
        addAtlasMessage(
          "Excellent choice. Let me brief you on our tactical operations.\n\nWe have successfully completed multiple high-priority missions including e-commerce platforms, enterprise dashboards, and API infrastructure.\n\nWhich operation would you like details on?"
        );
        // Scroll to projects section
        document.getElementById('operations')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'show_skills':
        addAtlasMessage(
          "Our arsenal is comprehensive and battle-tested.\n\n🎯 Frontend Division: React, Next.js, TypeScript (Level 85)\n⚙️ Backend Division: Node.js, Express (Level 78)\n🗄️ Database Division: PostgreSQL, MongoDB (Level 72)\n🛠️ DevOps Division: Docker, AWS, CI/CD (Level 68)\n\nNeed specifics on any capability?"
        );
        document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        addAtlasMessage(
          "Initiating contact protocol.\n\nI can help you:\n\n1. 📧 Send encrypted message\n2. 📅 Schedule reconnaissance call\n3. 📋 Download service record (CV)\n\nWhat would you prefer?"
        );
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  // Simple response generator (placeholder for AI)
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('hire') || input.includes('project') || input.includes('work')) {
      return "Outstanding! I'm detecting recruitment interest.\n\nOur operative is currently available for new missions. We specialize in full-stack operations with proven success in e-commerce, dashboards, and API deployments.\n\nWould you like to:\n1. Review past operations\n2. Discuss your specific mission requirements\n3. Schedule a tactical briefing call";
    }

    if (input.includes('skill') || input.includes('tech') || input.includes('stack')) {
      return "Affirmative. Our technical arsenal includes:\n\n🎯 Frontend: React, Next.js, TypeScript\n⚙️ Backend: Node.js, Express, GraphQL\n🗄️ Databases: PostgreSQL, MongoDB, Redis\n🛠️ DevOps: Docker, AWS, CI/CD\n\nWhich domain requires detailed intel?";
    }

    if (input.includes('experience') || input.includes('portfolio')) {
      return "Roger that. We have a decorated service record with multiple successful deployments:\n\n⚔️ E-Commerce Assault - High-traffic platform with payment integration\n💼 Dashboard Recon - Real-time analytics with complex data viz\n🎨 API Fortress - Scalable microservices architecture\n\nSelect any operation for a detailed briefing.";
    }

    if (input.includes('react') || input.includes('next')) {
      return "Excellent question. React and Next.js are our primary frontend weapons.\n\nProficiency Level: 85 (Elite Operative)\nYears in Service: 5+\nMajor Deployments: 15+\n\nWe're particularly strong in:\n→ Performance optimization\n→ Server-side rendering\n→ Complex state management\n→ Component architecture\n\nNeed specific examples?";
    }

    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "Contact protocols available:\n\n📧 Email: contact@example.com\n🐙 GitHub: View armory\n💼 LinkedIn: Professional network\n\nResponse time: <24 hours\nCurrent status: ✓ Available for missions\n\nShall I redirect you to the contact station?";
    }

    // Default response
    return "Acknowledged. I'm here to help you understand our capabilities and past operations.\n\nI can provide intel on:\n→ Technical skills & proficiency\n→ Completed missions (projects)\n→ Contact & recruitment\n\nWhat would you like to know?";
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center border-2 border-[#d4af37] bg-[#0a0a0a] shadow-lg transition-all hover:scale-110 hover:bg-[#d4af37]/20"
        aria-label="Open Commander ATLAS"
      >
        <div className="text-center">
          <div className="text-2xl">🎖️</div>
          <div className="status-pulse absolute right-1 top-1 h-3 w-3 rounded-full bg-[#39ff14]"></div>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col border border-[#6b7c59] bg-[#0a0a0a] shadow-2xl transition-all ${
        isMinimized ? 'h-14 w-80' : 'h-[600px] w-96'
      } max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#6b7c59] bg-[#0a0a0a]/95 p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
            <span className="text-sm">🎖️</span>
          </div>
          <div>
            <div className="font-mono text-xs font-bold uppercase text-[#e8e8e8]">
              CMDR ATLAS
            </div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14]"></span>
              <span className="font-mono text-[10px] uppercase text-[#6b7c59]">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="font-mono text-lg text-[#c3b091] hover:text-[#d4af37]"
            aria-label="Minimize"
          >
            {isMinimized ? '□' : '━'}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="font-mono text-lg text-[#c3b091] hover:text-[#c1440e]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border ${
                    message.role === 'user'
                      ? 'border-[#2d5f7f] bg-[#2d5f7f]/20'
                      : 'border-[#d4af37] bg-[#d4af37]/10'
                  }`}
                >
                  <span className="text-sm">
                    {message.role === 'user' ? '👤' : '🎖️'}
                  </span>
                </div>
                <div
                  className={`max-w-[70%] rounded border p-3 font-mono text-sm ${
                    message.role === 'user'
                      ? 'border-[#2d5f7f] bg-[#2d5f7f]/10 text-[#e8e8e8]'
                      : 'border-[#6b7c59]/30 bg-[#4a5c3a]/10 text-[#c3b091]'
                  }`}
                >
                  {message.content.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                      {line}
                    </p>
                  ))}
                  <div className="mt-1 text-[10px] text-[#6b7c59]">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
                  <span className="text-sm">🎖️</span>
                </div>
                <div className="rounded border border-[#6b7c59]/30 bg-[#4a5c3a]/10 p-3">
                  <div className="flex gap-1">
                    <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37]"></span>
                    <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37] [animation-delay:200ms]"></span>
                    <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37] [animation-delay:400ms]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length > 0 && (
            <div className="border-t border-[#6b7c59]/30 bg-[#0a0a0a]/80 p-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action.action)}
                    className="flex-shrink-0 border border-[#4a5c3a] bg-[#4a5c3a]/20 px-3 py-1 font-mono text-xs text-[#c3b091] transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                  >
                    {action.icon} {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#6b7c59] bg-[#0a0a0a] p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-[#6b7c59]/30 bg-[#0a0a0a]/50 px-3 py-2 font-mono text-sm text-[#e8e8e8] placeholder:text-[#6b7c59] focus:border-[#d4af37] focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="border border-[#d4af37] bg-[#d4af37]/20 px-4 py-2 font-mono text-sm font-bold text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ➤
              </button>
            </div>
            <div className="mt-2 font-mono text-[10px] text-[#6b7c59]">
              Press Enter to send • Commander ATLAS v1.0
            </div>
          </div>
        </>
      )}
    </div>
  );
}
