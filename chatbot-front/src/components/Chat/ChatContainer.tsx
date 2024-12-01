import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useChat } from '../../hooks/useChat';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { ChatSuggestions } from './ChatSuggestions';
import { LoadingDots } from './LoadingDots';
import Programs from './Programs';

export const ChatContainer: React.FC = () => {
  const { messages, isTyping, handleSendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log('se ejecuto',messages);
  }, [messages]);

  return (
    <div className='flex w-full max-h-[calc(100vh-4rem)]'>
      <div className="flex flex-col h-100vh w-[70%]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <ChatSuggestions onSelect={handleSendMessage} />
          <AnimatePresence mode="popLayout">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  
                >
                  <ChatMessage
                    message={message.text}
                    isBot={message.isBot}
                    timestamp={message.timestamp}
                  />
                </motion.div>
              ))}
              {isTyping && <LoadingDots />}
              <div ref={messagesEndRef} />
              <div className="mt-4 flex justify-center">
                <img src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg" alt="Logo Cesde" className="w-32 h-auto" />
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="border-t p-4 bg-white"
        >
          <ChatInput onSendMessage={handleSendMessage} />
        </motion.div>
      </div>
      <Programs onSelect={handleSendMessage} />
    </div>
  );
};