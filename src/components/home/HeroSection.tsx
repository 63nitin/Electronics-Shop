import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Zap, Star } from 'lucide-react';

export function HeroSection() {
   const googleBusinessProfileUrl = "https://maps.app.goo.gl/bV3dy2dMPBXo4cnp9"; // IMPORTANT: Replace with your actual Google Business Profile review link
  return (
    <div className="bg-[url('/bag.png')] bg-cover bg-cente py-20 md:py-32">
      <Container className="text-center">
        <Zap className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Power Up Your Home with <span className="text-primary">Dikshant Electronics</span>
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
           <Button asChild size="lg" variant="outline" className="shadow-md animate-gentle-pulse border-2 border-yellow-500">
            <Link href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 h-5 w-5 text-yellow-500" /> Rate Us
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
