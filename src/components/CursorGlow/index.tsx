'use client';

import React, { useEffect } from 'react';

const CursorGlow = () => {

  let diff: number;

  useEffect(()=>{
    diff = window.scrollY || 0
  })
  
  const handleScroll = () => {
    const cursor: HTMLDivElement | null = document.querySelector('.cursor-glow');
    cursor ? cursor.style.top = `${parseInt(cursor.style.top) + (window.scrollY - diff)}px` : null
    diff = window.scrollY

  };

  const handleMouseMove = (e: MouseEvent) => {
    const cursor: HTMLDivElement | null = document.querySelector('.cursor-glow');
    cursor ? cursor.style.left = `${e.clientX}px`: null
    cursor ? cursor.style.top = `${e.clientY + window.scrollY}px` : null
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="cursor-glow hidden lg:block"></div>;
};

export default CursorGlow;