import React from 'react';
import { useMouse } from 'react-use';

const GlassCursor = () => {
  const { docX, docY } = useMouse();

  const cursorStyle = {
    position: 'absolute',
    top: docY,
    left: docX,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none', // Ensure the cursor doesn't interfere with underlying elements
    mixBlendMode: 'multiply', // Apply glassmorphism effect
  };

  return <div style={cursorStyle}></div>;
};

export default GlassCursor;
