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
      <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground">
        {guide.imageUrl && (
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8 shadow-lg">
            <Image src={guide.imageUrl} alt={guide.title} layout="fill" objectFit="cover" data-ai-hint={`${guide.category} tutorial image`} />
          </div>
        )}
        <div className="mb-4">
          <Badge variant="outline">{guide.category}</Badge>
          <span className="ml-2 text-sm text-muted-foreground">Last updated: {new Date(guide.lastUpdated).toLocaleDateString()}</span>
          {guide.author && <span className="ml-2 text-sm text-muted-foreground">By: {guide.author}</span>}
        </div>
        
        <h1>{guide.title}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
      </article>

      {relatedProducts.length > 0 && (
        <>
          <Separator className="my-12" />
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map(product => product && <ProductCard key={product.id} product={product} />)}
            </div>
          </section>
        </>
      )}
    </Container>
  );
}
