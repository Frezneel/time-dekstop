import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function RunningText() {
    const [initialX, setInitialX] = useState(0);
    const [key, setKey] = useState(0); // Key to force re-mount
    const [durationRun, setDurationRun] = useState(0);

    useEffect(() => {
      // Function to update initialX based on window width
      const updateInitialX = () => {
        const containerWidth = window.innerWidth;
        setInitialX(containerWidth);
        setKey(prevKey => prevKey + 1); // Change the key to force re-mount
        setDurationRun(containerWidth / 20);
        console.log(containerWidth);
        
      };
  
      // Set initial value
      updateInitialX();
  
      // Add event listener for window resize
      window.addEventListener('resize', updateInitialX);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateInitialX);
      };
    }, []);
  

    return (
        <div 
        style={{ 
            overflow: 'hidden', 
            whiteSpace: 'nowrap', 
            width: '100%',
            backgroundColor: '#89A8AE',
            padding: '8px',
            marginBottom: '4px'
        }}>
          <motion.p
          key={key}
            initial={{ x: initialX }} // Start from the right side
            animate={{ x: '-120%' }} // Move to the left side
            transition={{ duration: durationRun, repeat: Infinity, ease: 'linear' }} // Repeat the animation indefinitely
            style={{ display: 'inline-block' }}
          >
            Selamat datang di Bandar Udara Internasional Dhoho Kediri
          </motion.p>
        </div>
      );    
}