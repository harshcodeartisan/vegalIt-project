import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const isClickable = e.target.matches('a, button, [role="button"]');
        setIsHovering(isClickable);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          transform: `translate(${followerPosition.x - 20}px, ${followerPosition.y - 20}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;