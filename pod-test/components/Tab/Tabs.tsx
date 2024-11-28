'use client'
import React from 'react';
import { TabsProvider } from './TabsProvider';

type TabsProps = {
  children: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

export default Tabs;
