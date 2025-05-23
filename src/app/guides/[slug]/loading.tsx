import { Container } from '@/components/layout/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function GuideLoading() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-8 w-1/3 mb-2" /> {/* Back link */}
        <Skeleton className="aspect-video w-full rounded-lg mb-8" /> {/* Image */}
        
        <div className="mb-4 flex gap-2">
          <Skeleton className="h-6 w-24 rounded-full" /> {/* Category Badge */}
          <Skeleton className="h-6 w-32 rounded-full" /> {/* Last Updated */}
        </div>
        
        <Skeleton className="h-12 w-3/4 mb-6" /> {/* Title */}
        
        <div className="space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>

      <Separator className="my-12" />
      <section className="max-w-4xl mx-auto">
        <Skeleton className="h-8 w-1/2 mx-auto mb-8" /> {/* Related Products Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Skeleton className="h-72 w-full rounded-lg" />
          <Skeleton className="h-72 w-full rounded-lg" />
        </div>
      </section>
    </Container>
  );
}
