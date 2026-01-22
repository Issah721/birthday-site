"use client";

import { useEffect, useState, useRef } from 'react';

// Define the threshold for intersection observer, e.g., 50% of the element is visible
const INTERSECTION_THRESHOLD = 0.5;

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= INTERSECTION_THRESHOLD) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: INTERSECTION_THRESHOLD, rootMargin: '-50% 0px -50% 0px' } // Adjust rootMargin to trigger when section is in the middle
    );

    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as Element[];
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};
