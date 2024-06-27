'use client';
import React, { useEffect, useRef, useState, ReactNode, MutableRefObject } from 'react';

export function useIsVisible(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    
    });
    
    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export function Observer({ children }: { children: ReactNode }) {
  const childrenArray = React.Children.toArray(children);
  const refs = useRef<(HTMLDivElement | null)[]>(Array(childrenArray.length).fill(null));

  return (
    <>
      {childrenArray.map((child, index) => {
        const ref = useRef<HTMLDivElement | null>(null);
        
        useEffect(() => {
          refs.current[index] = ref.current;
        }, [index]);

        const isVisible = useIsVisible(ref);

        return (
          <div key={index} ref={ref}>
            {React.cloneElement(child as React.ReactElement, {
              isVisible,
              children: (child as React.ReactElement).props.children // Explicitly pass children
            })}
          </div>
        );
      })}
    </>
  );
}
