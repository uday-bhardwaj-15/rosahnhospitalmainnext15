'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default image if no images provided
  const defaultImage = 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
  const displayImages = images.length > 0 ? images : [defaultImage];

  useEffect(() => {
    if (autoPlay && displayImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, displayImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? displayImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === displayImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (displayImages.length === 1) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={displayImages[0]}
          alt="Department"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-t-lg">
        <Image
          src={displayImages[currentIndex]}
          alt={`Department image ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {currentIndex + 1} / {displayImages.length}
      </div>
    </div>
  );
}