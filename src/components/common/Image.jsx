import React, { useState } from 'react';

// This component provides a simple way to use images in your React components
// with proper error handling and loading states
function Image({ src, alt, className, style }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle image errors by showing a placeholder
  const handleError = (e) => {
    console.warn(`Image failed to load: ${src}`);
    setIsError(true);
    e.target.src = '/vite.svg'; // Fallback to Vite logo
    e.target.style.opacity = '0.5';
  };

  // Handle image load complete
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  // Special handling for SVG files that might not trigger onLoad properly
  const isSvg = src?.toLowerCase().endsWith('.svg');
  
  return (
    <>
      {isLoading && !isSvg && <div className="image-loading-placeholder"></div>}
      <img 
        src={src} 
        alt={alt || 'Image'} 
        className={`${className || ''} ${isError ? 'image-error' : ''}`}
        style={{
          ...style,
          transition: 'opacity 0.3s ease',
          ...(isLoading && !isSvg ? { opacity: 0 } : { opacity: 1 })
        }}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
}

export default Image;
