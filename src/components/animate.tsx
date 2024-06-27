'use client';
import React, { ReactNode, useMemo } from 'react';

interface AnimateProps {
  isVisible?: boolean;
  animation: string;
  children: ReactNode;
}

function Animate({ isVisible, animation, children }: AnimateProps) {
  const animationClass = useMemo(() => (isVisible ? animation : ''), [isVisible, animation]);

  return (
    <div className={animationClass}>
      {children}
    </div>
  );
}

export default Animate;
