import { HeroSection } from '@/components/home/HeroSection';
import { ProductList } from '@/components/products/ProductList';
import { GuideCard } from '@/components/guides/GuideCard';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { sampleProducts, sampleGuides, productCategories } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = sampleProducts.slice(0, 4);
  const featuredGuides = sampleGuides.slice(0, 2);

  return (
    <>
      <HeroSection />

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Featured Products</h2>
          <p className="text-center text-muted-foreground mb-10">Handpicked selections for your home electronic needs.</p>
          <ProductList products={featuredProducts} />
          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-secondary/50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Product Categories</h2>
          <p className="text-center text-muted-foreground mb-10">Find exactly what you're looking for.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map(category => (
              <Link key={category.id} href={`/products?category=${category.slug}`} className="block group">
                <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col items-center justify-center">
                  {category.icon && <category.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Helpful Guides & Tutorials</h2>
          <p className="text-center text-muted-foreground mb-10">Learn more about your electronics and how to use them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/guides">
                Discover More Guides <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-r from-accent/80 to-primary/80 text-primary-foreground">
        <Container className="text-center">
          <Zap className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Not Sure What You Need?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Let our AI-Powered Product Finder guide you to the perfect electronic items based on your preferences and needs.
          </p>
          <Button asChild size="lg" variant="default" className="bg-background text-primary hover:bg-background/90 shadow-lg">
            <Link href="/recommendations">
              Try the Product Finder <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
