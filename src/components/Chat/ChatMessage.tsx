import React from 'react';
import { User, Bot } from 'lucide-react';
import { motion } from 'framer-motion';


interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, timestamp }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <motion.div 
      className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial={{ opacity: 0, x: isBot ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {isBot && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center"
        >
          <Bot className="w-5 h-5 text-primary" />
        </motion.div>
      )}
      <div className="flex flex-col">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
            isBot ? 'bg-primary-light text-gray-800' : 'bg-primary text-white'
          }`}
        >
          <p className="text-sm whitespace-pre-line">{message}</p>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-gray-500 mt-1 px-1"
        >
          {formatTime(timestamp)}
        </motion.span>
      </div>
      {!isBot && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center"
        >
          <User className="w-5 h-5 text-primary" />
        </motion.div>
      )}
    </motion.div>
  );
};