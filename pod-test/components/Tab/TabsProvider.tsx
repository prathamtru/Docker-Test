"use client";
import React, { createContext, useContext, useState } from 'react';

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const TabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

export { TabsProvider, useTabs };
