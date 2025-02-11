'use client'

import { Message } from '@/interfaces/message.interface';
import { ComponentWithChildren } from '@/models/component-with-children';
import React, { createContext, useContext, useState } from 'react';

interface MessagesContextData {
  messageValue: string
  setMessageValue: React.Dispatch<React.SetStateAction<string>>
  currentUsername: string
  setCurrentUsername: React.Dispatch<React.SetStateAction<string>>
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

export const MessagesContext = createContext({} as MessagesContextData);

export const MessagesProvider = ({ children }: ComponentWithChildren) => {
  const [messageValue, setMessageValue] = useState<string>('')
  const [currentUsername, setCurrentUsername] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])

  return (
    <MessagesContext.Provider
      value={{
        messageValue,
        setMessageValue,
        currentUsername,
        setCurrentUsername,
        messages,
        setMessages
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessagesContext);

  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }

  return context
};