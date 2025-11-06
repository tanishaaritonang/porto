import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

const Avatar: React.FC<React.PropsWithChildren<AvatarProps>> = ({ src, alt = 'Avatar', fallback, className = '', children }) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      {src && !hasError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
          {children || fallback || '?'}
        </div>
      )}
    </div>
  );
};

interface AvatarImageProps {
  src: string;
  alt: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

interface AvatarFallbackProps {
  children: React.ReactNode;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };