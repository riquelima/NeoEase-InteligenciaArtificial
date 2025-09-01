import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  industry: string;
  imageUrl: string;
  results: {
    label: string;
    value: string;
  }[];
}

// FIX: Declare global types for the 'dotlottie-wc' web component to fix TypeScript errors.
// This was moved from components/WhatsAppButton.tsx to ensure it is applied project-wide.
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'dotlottie-wc': React.HTMLAttributes<HTMLElement> & {
                src: string;
                speed?: string;
                autoplay?: boolean;
                loop?: boolean;
            };
        }
    }
}
