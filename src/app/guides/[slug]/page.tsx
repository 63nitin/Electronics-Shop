import { getGuideBySlug, getAllGuides, getProductById } from '@/lib/data';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/products/ProductCard';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface GuidePageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: GuidePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }
  
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: guide.imageUrl ? [guide.imageUrl, ...previousImages] : previousImages,
      type: 'article',
      publishedTime: guide.lastUpdated, // Assuming lastUpdated is ISO string
      authors: guide.author ? [guide.author] : [],
      tags: [guide.category],
    },
  };
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const relatedProducts = guide.relatedProductIds?.map(id => getProductById(id)).filter(p => p !== undefined) || [];

  return (
    <Container className="py-8 md:py-12">
      <div className="mb-6">
        <Link href="/guides" className="inline-flex items-center text-sm text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to all guides
        </Link>
      </div>

      {/* Card-like container for the entire guide content */}
      <div className="bg-card text-card-foreground rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        {guide.imageUrl && (
          <div className="aspect-video relative w-full">
            <Image src={guide.imageUrl} alt={guide.title} layout="fill" objectFit="cover" data-ai-hint={`${guide.category} tutorial image`} />
          </div>
        )}
        
        <div className="p-6 md:p-8"> {/* Padding for text content */}
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Badge variant="outline">{guide.category}</Badge>
            <span className="text-muted-foreground">Last updated: {new Date(guide.lastUpdated).toLocaleDateString()}</span>
            {guide.author && <span className="text-muted-foreground">By: {guide.author}</span>}
          </div>
          
          {/* Apply prose to this inner article */}
          <article className="prose prose-lg dark:prose-invert 
                              prose-headings:font-bold prose-headings:text-foreground 
                              prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground
                              max-w-none"> {/* max-w-none to ensure prose takes full width of its container */}
            <h1>{guide.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: guide.content }} />
          </article>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <>
          <Separator className="my-12" />
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map(product => product && <ProductCard key={product.id} product={product} />)}
            </div>
          </section>
        </>
      )}
    </Container>
  );
}
