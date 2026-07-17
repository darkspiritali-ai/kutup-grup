"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src="/logo/logo.png" 
          alt="Kutup Grup" 
          width={180} 
          height={86} 
          style={{ filter: 'brightness(0) invert(1)' }}
          priority
        />
      </motion.div>

      <style jsx>{`
        :global(.preloader-overlay) {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background-color: #060B14;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* Let clicks pass through after it animates out */
        }
      `}</style>
    </motion.div>
  );
}
