import { Container } from '@/components/layout/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function ProductLoading() {
  return (
    <Container className="py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-4 gap-2 mt-4">
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <Skeleton className="h-10 w-3/4 mb-2" /> {/* Product Name */}
          <Skeleton className="h-6 w-1/2 mb-4" /> {/* Category & Rating */}
          <Skeleton className="h-20 w-full mb-4" /> {/* Description */}
          
          <Skeleton className="h-12 w-1/3 my-4" /> {/* Price */}
          
          <Skeleton className="h-12 w-full md:w-1/2 mb-4" /> {/* Add to cart button */}
          
          <Skeleton className="h-4 w-1/4" /> {/* Stock status */}
          <Skeleton className="h-3 w-1/3 mt-1" /> {/* SKU */}

          <div className="mt-6">
            <Skeleton className="h-4 w-1/5 mb-2" /> {/* Tags label */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Skeleton className="h-96 w-full rounded-lg" /> {/* Product Details Card */}
        </div>
        <div className="md:col-span-1">
          <Skeleton className="h-64 w-full rounded-lg" /> {/* Reviews Card */}
        </div>
      </div>
    </Container>
  );
}
