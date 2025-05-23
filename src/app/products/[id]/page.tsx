import { getProductById, sampleProducts } from '@/lib/data';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MessageSquare } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0], ...previousImages],
      type: 'article', // Changed from 'product'
      siteName: 'Electron Hub',
    },
  };
}

export async function generateStaticParams() {
  return sampleProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <ProductImageGallery images={product.images} productName={product.name} />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">{product.category}</Badge>
            {product.reviews && product.reviews.length > 0 && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(product.reviews!.reduce((acc, r) => acc + r.rating, 0) / product.reviews!.length) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                ))}
                <span className="ml-1 text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
              </div>
            )}
          </div>
          <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
          
          <p className="text-3xl font-semibold text-primary my-4">${product.price.toFixed(2)}</p>
          
          {product.stock > 0 ? (
            <p className="text-sm text-green-600">In Stock ({product.stock} available)</p>
          ) : (
            <p className="text-sm text-red-600">Out of Stock</p>
          )}
          <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>

          {product.tags && product.tags.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-1">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </div>
          )}
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-3"> {/* Changed col-span to 3 to take full width */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              {product.longDescription ? (
                 <div className="prose prose-sm max-w-none dark:prose-invert text-foreground" dangerouslySetInnerHTML={{ __html: product.longDescription.replace(/\n/g, '<br />') }} />
              ) : (
                <p className="text-muted-foreground">{product.description}</p>
              )}
             
              {product.specifications && product.specifications.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mt-6 mb-3 text-foreground">Specifications</h3>
                  <ul className="space-y-2">
                    {product.specifications.map(spec => (
                      <li key={spec.key} className="flex justify-between text-sm border-b pb-1">
                        <span className="font-medium text-foreground/80">{spec.key}:</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
