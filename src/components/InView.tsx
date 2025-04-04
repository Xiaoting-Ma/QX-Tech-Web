'use client';

import React from 'react';
import { useInView } from "react-intersection-observer";

/**
 * InView component for Next.js
 * @param {Object} props
 * @param {Function} props.children Function that receives inView boolean and returns a React element
 * @returns {React.JSX.Element}
 */
interface InViewProps {
  children: (args: { inView: boolean }) => React.ReactNode;
}

export default function InView({ children }: InViewProps) {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  
  return (
    <div ref={viewRef} className="h-full snap-center">
      {children({ inView })}
    </div>
  );
}