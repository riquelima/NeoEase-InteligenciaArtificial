import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';

const webhookUrl = 'https://n8n.intelektus.tech/webhook/conexaosite';

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

const AiIcon = () => (
    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 010 3H14a1 1 0 00-1 1v1.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H9a1 1 0 001-1v-.5z" />
            <path d="M9.043 8.258a1.5 1.5 0 00-2.086 2.086l.64.64-.64.64a1.5 1.5 0 002.086 2.086l.64-.64.64.64a1.5 1.5 0 002.086-2.086l-.64-.64.64-.64a1.5 1.5 0 00-2.086-2.086l-.64.64-.64-.64zM10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
    </div>
);

const UserIcon = () => (
    <div className="w-8 h-8 rounded-full bg-dark-border flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medium-text" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    </div>
);

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-2">
        <div className="w-2 h-2 bg-medium-text rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-medium-text rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-medium-text rounded-full animate-bounce"></div>
    </div>
);

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const savedMessages = sessionStorage.getItem('chatHistory');
            if (savedMessages) {
                setMessages(JSON.parse(savedMessages));
            } else {
                 setMessages([{
                    sender: 'ai',
                    text: 'Olá! 👋 Sou o assistente virtual da NeoEase. Como posso ajudar você a automatizar seu negócio hoje?',
                    timestamp: Date.now()
                }]);
            }
        } catch (error) {
            console.error("Failed to parse chat history from sessionStorage", error);
        }
    }, []);

    useEffect(() => {
        if(messages.length > 0) {
            try {
                sessionStorage.setItem('chatHistory', JSON.stringify(messages));
            } catch (error) {
                console.error("Failed to save chat history to sessionStorage", error);
            }
        }
    }, [messages]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async () => {
      if (inputValue.trim() === '' || isLoading) return;

      const userMessage: ChatMessage = {
        sender: 'user',
        text: inputValue,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, userMessage]);

      const currentInput = inputValue;
      setInputValue('');
      setIsLoading(true);

      try {
        const body = JSON.stringify({ question: currentInput });

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        const text = await response.text();
        let responseData: any = {};
        try { 
            // n8n might return an empty string for a successful but no-op response
            if (text) {
                responseData = JSON.parse(text); 
            }
        } catch (_) { 
            responseData = { text }; 
        }

        let aiReply = 'Desculpe, não entendi.';
        
        // n8n can respond with an array of items or a single object.
        const firstItem = Array.isArray(responseData) ? responseData[0] : responseData;

        if (firstItem && typeof firstItem === 'object') {
            // As per the n8n screenshot, the AI response is in the 'output' field.
            // We also check for other common fields for robustness.
            aiReply = firstItem.output || firstItem.reply || firstItem.text || aiReply;
        } else if (typeof firstItem === 'string') {
            aiReply = firstItem;
        }

        setMessages(prev => [...prev, { sender: 'ai', text: aiReply, timestamp: Date.now() }]);

      } catch (error: any) {
        console.error('Failed to send message:', error);
        const userFriendlyMessage =
          error?.message?.includes('500')
            ? 'Ocorreu um erro no servidor (n8n). Verifique o console do navegador e o workflow para mais detalhes.'
            : 'Não foi possível conectar ao assistente. Verifique sua conexão ou a configuração do servidor.';
        setMessages(prev => [...prev, { sender: 'ai', text: userFriendlyMessage, timestamp: Date.now() }]);
      } finally {
        setIsLoading(false);
      }
    };

    return (
        <div className={`fixed bottom-24 right-4 sm:right-8 z-40 w-[calc(100vw-2rem)] sm:w-full max-w-sm h-[65vh] max-h-[600px] transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
            <div className="bg-dark-card border border-dark-border rounded-2xl h-full flex flex-col shadow-2xl shadow-primary/20">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-dark-border flex-shrink-0">
                    <div className="flex items-center space-x-3">
                        <img src="https://i.imgur.com/hLWBAk1.png" alt="NeoEase Logo" className="h-10" />
                        <div>
                            <h3 className="font-bold text-light-text">Assistente NeoEase</h3>
                            <p className="text-xs text-medium-text flex items-center">
                                <span className="w-2 h-2 bg-success rounded-full mr-1.5"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-medium-text hover:text-light-text p-1 rounded-full hover:bg-dark-border">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Messages */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.timestamp} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                             {msg.sender === 'ai' && <AiIcon />}
                            <div className={`max-w-[80%] rounded-xl px-4 py-2 ${msg.sender === 'user' ? 'bg-primary text-black rounded-br-none' : 'bg-dark-bg text-light-text rounded-bl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.sender === 'user' && <UserIcon />}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3">
                            <AiIcon />
                            <div className="bg-dark-bg text-light-text rounded-xl rounded-bl-none px-4 py-2">
                                <TypingIndicator />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-dark-border flex-shrink-0">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }}
                        className="flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSendMessage(); }}}
                            placeholder="Digite sua mensagem..."
                            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || inputValue.trim() === ''} className="bg-primary hover:bg-primary-hover text-black p-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:bg-primary/50 disabled:scale-100 disabled:cursor-not-allowed">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatWidget;