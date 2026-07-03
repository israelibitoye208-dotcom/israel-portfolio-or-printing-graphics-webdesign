import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Resolve icon component dynamically from name string
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default sparkle icon if not found
    const DefaultIcon = Icons.Sparkles;
    return <DefaultIcon className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
