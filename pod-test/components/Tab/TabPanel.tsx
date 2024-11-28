'use client'
import React from 'react';
import { useTabs } from './TabsProvider';

type TabPanelProps = {
  index: number;
  children: React.ReactNode;
  className?: string;
};

const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
  const { activeTab } = useTabs();
  return activeTab === index ? (
    <div id={`tabpanel-${index}`} tabIndex={-1} className={`tabpanel ${className}`}>
      {children}
    </div>
  ) : null;
};

export default TabPanel;
