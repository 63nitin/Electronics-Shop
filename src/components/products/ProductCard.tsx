import type { Product } from '@/types/domain';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block">
          <div className="aspect-video overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} electronics`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1">
          <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
        <Button asChild variant="outline" size="sm">
          <Link href={`/products/${product.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
