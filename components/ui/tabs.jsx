
import React, { useState } from 'react';

export function Tabs({ defaultValue, children, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className }) {
  return <div className={`flex space-x-2 mb-4 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className }) {
  return <button className={`px-4 py-2 rounded ${className}`}>{children}</button>;
}

export function TabsContent({ value, children }) {
  return <div>{children}</div>;
}
