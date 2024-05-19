'use client';
import React, {useEffect, useRef, useState, createContext, useCallback} from "react";

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}

const sections = ["introduce", "instructor", "classes"];

function nextSection(currentSection: string) {
  return sections[Math.min(sections.indexOf(currentSection) + 1, sections.length - 1)];
}

function preSection(currentSection: string) {
  return sections[Math.max(sections.indexOf(currentSection) - 1, 0)];
}

export interface MainScrollProviderProps {
  children: React.ReactNode
}

export const MainScroll = createContext({
  state: {
    presentSection: "introduce",
  },
  actions: {
    setPresentSection: (section: string) => {
    }
  }

})

export const MainScrollProvider: React.FC<MainScrollProviderProps> = ({children}) => {
  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    }
  }, []);
  const [presentSection, setPresentSection] = useState("introduce");

  useEffect(() => {
    const anchor = document.getElementById(presentSection);
    if (anchor) {
      anchor.scrollIntoView({behavior: "smooth"});
    }
  }, [presentSection]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastTargetRef = useRef<EventTarget | null>(null);

  const handleWheelScroll = useCallback(
    (event: WheelEvent) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        lastTargetRef.current = null;
      }, 100);
      if (lastTargetRef.current === event.target) {
        return;
      }
      lastTargetRef.current = event.target;


      const _scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      if (_scrollDirection === 'down') {
        const next = nextSection(presentSection);
        setPresentSection(next);
      }
      if (_scrollDirection === 'up') {
        const pre = preSection(presentSection);
        setPresentSection(pre);
      }
    }, [presentSection])
  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll);
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    }
  }, [handleWheelScroll])

  const startTouchY = useRef(0);
  const startTouchTime = useRef(0);
  const currentTouchY = useRef(0);

  const handleTouchmove = useCallback((event: TouchEvent) => {
    // console.log('touchmove', event);

    window.scroll(0, window.scrollY - event.touches[0].clientY + currentTouchY.current);
    currentTouchY.current = event.touches[0].clientY;
  }, [])

  const handleTouchstart = useCallback((event: TouchEvent) => {
    startTouchY.current = currentTouchY.current = event.touches[0].clientY;
    startTouchTime.current = Date.now();
    window.addEventListener("touchmove", handleTouchmove);
  }, [handleTouchmove])
  const handleTouchend = useCallback((event: TouchEvent) => {
    const endTouchY = event.changedTouches[0].clientY;
    const screenHeight = window.innerHeight;
    const moveRate = 4;
    const moveTime = (Date.now() - startTouchTime.current) / 1000;

    if (endTouchY - startTouchY.current > screenHeight / (Math.max(moveRate, 1 / moveTime))) {
      const pre = preSection(presentSection);
      setPresentSection(pre);
    } else if (startTouchY.current - endTouchY > (Math.max(moveRate, 1 / moveTime))) {
      const next = nextSection(presentSection);
      setPresentSection(next);
    } else {
      const anchor = document.getElementById(presentSection);
      if (anchor) {
        anchor.scrollIntoView({behavior: "smooth"});
      }
    }

    startTouchY.current = 0;
    window.removeEventListener("touchmove", handleTouchmove);
  }, [handleTouchmove, presentSection])

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchstart);
    window.addEventListener("touchend", handleTouchend);
    return () => {
      window.removeEventListener("touchstart", handleTouchstart);
      window.removeEventListener("touchend", handleTouchend);
    }
  }, [handleTouchstart, handleTouchend]);

  const value = {
    state: {presentSection},
    actions: {setPresentSection}
  };
  return <MainScroll.Provider value={value}>
    {children}
  </MainScroll.Provider>
}