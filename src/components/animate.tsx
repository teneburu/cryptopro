'use client';
import React, { useEffect, ReactNode, useMemo } from 'react';

interface AnimateProps {
  isVisible?: boolean;
  animation: string;
  children: ReactNode;
}

function Animate({ isVisible, animation, children }: AnimateProps) {
  const animationClass = useMemo(() => (isVisible ? animation : ''), [isVisible, animation]);

  useEffect(() => {
    console.log(`Visibility changed: ${isVisible}`);
  }, [isVisible]);

  return (
    <div className={animationClass}>
      {children}
    </div>
  );
}

export default Animate;
