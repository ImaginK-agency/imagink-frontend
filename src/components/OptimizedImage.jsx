import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Préfixer les URLs relatives
  const fullSrc = src?.startsWith('/')
    ? `${import.meta.env.VITE_API_BASE_URL || 'https://server-headless.imagink.agency'}${src}`
    : src;

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">
          Image non disponible
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />
      )}
      <img
        src={fullSrc}
        alt={alt}
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default OptimizedImage;
