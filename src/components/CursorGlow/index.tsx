import React, { useEffect } from 'react';

const CursorGlow = () => {

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor: HTMLDivElement | null = document.querySelector('.cursor-glow');
      cursor ? cursor.style.left = `${e.clientX}px`: null
      cursor ? cursor.style.top = `${e.clientY + window.scrollY}px` : null
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let diff = window.scrollY

    const handleScroll = () => {
      const cursor: HTMLDivElement | null = document.querySelector('.cursor-glow');
      cursor ? cursor.style.top = `${parseInt(cursor.style.top) + (window.scrollY - diff)}px` : null
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="cursor-glow hidden lg:block"></div>;
};

export default CursorGlow;