"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return (
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="aspect-square bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">No image available</p>
          </div>
        </CardContent>
      </Card>
    );
  }

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
              priority // Prioritize main image
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
                selectedImage === image ? "border-primary shadow-md" : "border-transparent hover:border-muted-foreground/50"
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
