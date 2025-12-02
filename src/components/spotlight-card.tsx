"use client";

import React, { useRef, useState, useEffect } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightStyle, setSpotlightStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setSpotlightStyle({
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(77, 84% 38%, 0.15), transparent 40%)`,
      });
    };

    const cardElement = cardRef.current;
    cardElement?.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardElement?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={spotlightStyle}
      />
    </div>
  );
};

export default SpotlightCard;
