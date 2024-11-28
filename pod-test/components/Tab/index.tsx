'use client';
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

type TabsProps = { children: React.ReactNode };

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

type TabProps = { index: number; label: string; className?: string };

const Tab: React.FC<TabProps> = ({ index, label, className }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === index;

  const buttonClass = `
    ui-w-full ui-py-4 ui-px-4 ui-text-left ui-font-poppinsRegular ui-border-b ui-border-b-lightgray2 ui-text-base 
    ${isActive ? 'ui-bg-green ui-text-white' : 'ui-bg-transparent focus-visible:ui-outline-green'}
  `;

  return (
    <button onClick={() => setActiveTab(index)} className={`${buttonClass} ${className}`} role="tab" aria-selected={isActive} aria-controls={`tabpanel-${index}`} id={`tab-${index}`}>
      {label}
    </button>
  );
};

type TabPanelProps = { index: number; children: React.ReactNode; className?: string };

const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
  const { activeTab } = useTabs();
  return activeTab === index ? (
    <div id={`tabpanel-${index}`} tabIndex={-1} className={`tabpanel ${className}`} role="tabpanel" aria-labelledby={`tab-${index}`}>
      {children}
    </div>
  ) : null;
};

export { Tabs, Tab, TabPanel };