'use client'
import React from 'react';
import { useTabs } from './TabsProvider';

type TabProps = {
  index: number;
  label: string;
  className?: string;
};

const Tab: React.FC<TabProps> = ({ index, label, className }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === index;

  const buttonClass = `
    ui-w-full ui-py-4 ui-px-4 ui-text-left ui-font-poppinsRegular ui-border-b ui-border-b-lightgray2 ui-text-base 
    ${isActive ? 'ui-bg-green ui-text-white' : 'ui-bg-transparent focus-visible:ui-outline-green'}
  `;

  return (
    <button onClick={() => setActiveTab(index)} className={`${buttonClass} ${className}`}>
      {label}
    </button>
  );
};

export default Tab;