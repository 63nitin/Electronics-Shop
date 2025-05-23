import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
      <Container className="text-center">
        <Zap className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Power Up Your Home with <span className="text-primary">Electron Hub</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Discover a wide range of quality electronic items, from essential wiring to smart home devices. Everything you need, all in one place.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Link href="/products">
              Shop All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="shadow-md">
            <Link href="/recommendations">
              Find Your Perfect Product
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
