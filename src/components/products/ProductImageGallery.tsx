"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

// Replace this part with actual product images
const sampleImages = [
  "https://images.unsplash.com/photo-1606813902548-275d71b0a07e", // example 1
  "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5", // example 2
  "https://images.unsplash.com/photo-1612832020934-e90c2fd09f6b", // example 3
  "https://images.unsplash.com/photo-1600185365453-d92b8f4f3087"  // example 4
];

export function ProductImageGallery({
  images = sampleImages,
  productName = "Modern T-Shirt"
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="aspect-square">
            <Image
              src={selectedImage}
              alt={`${productName} - main image`}
              width={600}
              height={600}
              className="object-contain w-full h-full"
              priority
              data-ai-hint="product photo"
            />
          </div>
        </CardContent>
      </Card>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "overflow-hidden rounded-md aspect-square border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                selectedImage === image
                  ? "border-primary shadow-md"
                  : "border-transparent hover:border-muted-foreground/50"
              )}
            >
              <Image
                src={image}
                alt={`${productName} - thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
                data-ai-hint="product thumbnail"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
