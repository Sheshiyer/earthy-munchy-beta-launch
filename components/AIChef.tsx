import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, ChefHat } from 'lucide-react';
import { getRecipeSuggestion } from '../services/gemini';
import { ChatMessage } from '../types';

interface AIChefProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChef: React.FC<AIChefProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Chef Munchy. Ask me for a recipe using our premium spices or honey!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getRecipeSuggestion(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-brand-cream shadow-2xl flex flex-col animate-fade-in border-l border-brand-moss/20">
        {/* Header */}
        <div className="p-4 bg-brand-moss text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-full">
                <ChefHat size={24} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg">Chef Munchy AI</h3>
              <p className="text-xs opacity-80">Culinary Expert</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-moss text-white rounded-tr-none' 
                    : 'bg-white border border-brand-moss/10 text-neutral-800 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.role === 'model' && (
                    <Sparkles size={14} className="inline-block mr-1 text-brand-yellow mb-1" />
                )}
                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-brand-moss/10 shadow-sm flex gap-2 items-center">
                <div className="w-2 h-2 bg-brand-moss/40 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-brand-moss/40 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-brand-moss/40 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-neutral-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Suggest a recipe for honey..."
              className="flex-1 bg-neutral-100 border-none rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-brand-moss/20 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-brand-moss text-white rounded-full hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChef;