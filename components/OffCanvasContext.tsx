'use client';
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface OffCanvasContextProps {
  children: ReactNode;
}

interface OffCanvasContextValue {
  isOpen: boolean;
  openCanvas: () => void;
  closeCanvas: () => void;
}

const OffCanvasContext = createContext<OffCanvasContextValue | undefined>(undefined);

export const OffCanvasProvider: React.FC<OffCanvasContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCanvas = () => {
    setIsOpen(true);
  };

  const closeCanvas = () => {
    setIsOpen(false);
  };

  return (
    <OffCanvasContext.Provider value={{ isOpen, openCanvas, closeCanvas }}>
      {children}
    </OffCanvasContext.Provider>
  );
};

export const useOffCanvas = () => {
  const context = useContext(OffCanvasContext);
  if (!context) {
    throw new Error('useOffCanvas must be used within an OffCanvasProvider');
  }
  return context;
};
