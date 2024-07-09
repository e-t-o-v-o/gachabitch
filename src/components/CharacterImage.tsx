import React, { useState, useEffect } from 'react';

interface CharacterImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({ src, alt, className }) => {
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // Local caching mechanism
  const cachedImages: { [key: string]: string } = {};

  useEffect(() => {
    setImageError(false);
    setRetryCount(0);
  }, [src]);

  const loadImage = (url: string) => {
    if (cachedImages[url]) {
      return cachedImages[url];
    }

    // Add a unique query parameter to bypass caching
    const uniqueUrl = `${url}${url.includes('?') ? '&' : '?'}nocache=${new Date().getTime()}`;
    
    return new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        cachedImages[url] = uniqueUrl;
        resolve(uniqueUrl);
      };
      img.onerror = reject;
      img.src = uniqueUrl;
    });
  };

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prevCount => prevCount + 1);
      loadImage(src)
        .then(() => setImageError(false))
        .catch(() => {
          if (retryCount + 1 >= maxRetries) {
            setImageError(true);
          }
        });
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    return <div className={`${className} bg-gray-300 flex items-center justify-center`}>{alt}</div>;
  }

  return (
    <div className={`${className} flex items-center justify-center overflow-hidden`}>
      <img
        src={cachedImages[src] || src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        onError={handleImageError}
      />
    </div>
  );
};

export default CharacterImage;