import { useState } from 'react';
import { getResponse, educationalResponses } from '../utils/chatResponses';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: educationalResponses.greeting[0],
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message: {id: number, ask:string, response:string}) => {
    const newMessage = {
      id: Date.now().toString(),
      text: message.ask,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: message.response ?? getResponse(message.ask),
        isBot: true,
        timestamp: new Date()
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return {
    messages,
    isTyping,
    handleSendMessage
  };
};