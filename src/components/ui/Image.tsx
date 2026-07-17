import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

export default function Image({ src, alt, fill, priority, quality: _quality, className, style, ...props }: ImageProps) {
  const finalStyle: React.CSSProperties = fill ? {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    ...style
  } : { ...style };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={finalStyle}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
