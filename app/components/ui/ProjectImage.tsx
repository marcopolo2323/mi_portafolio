'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
}

export function ProjectImage({ src, alt, title }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Si la imagen es un placeholder o hay error, mostrar fallback
  if (src === '/api/placeholder/400/250' || imageError || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
        <div className="text-5xl mb-3">🚀</div>
        <span className="text-neutral-700 font-semibold text-center text-sm mb-1">
          {title}
        </span>
        <span className="text-neutral-500 text-xs text-center">
          Imagen próximamente
        </span>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      {imageLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin mb-2"></div>
            <div className="text-neutral-500 text-sm">Cargando imagen...</div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={handleImageError}
        onLoad={handleImageLoad}
        priority={false}
      />
    </>
  );
}