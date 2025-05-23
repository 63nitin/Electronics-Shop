import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Electron Hub',
  description: 'Learn more about Electron Hub, your trusted source for home electronics and expert advice.',
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Electron Hub</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Powering your home, simplifying your life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="prose prose-lg dark:prose-invert text-foreground/90">
          <p>
            Welcome to Electron Hub, your premier destination for high-quality home electronics. 
            Founded with the vision of making advanced technology accessible and understandable, 
            we offer a curated selection of products ranging from essential home wiring and fans to 
            cutting-edge smart home devices and DIY electronic tools.
          </p>
          <p>
            Our mission is to not only provide top-notch products but also to empower our customers 
            with the knowledge they need. Through our interactive product guides, tutorials, and 
            personalized AI-powered recommendations, we strive to help you make informed decisions 
            and get the most out of your purchases.
          </p>
          <p>
            At Electron Hub, we believe in reliability, innovation, and exceptional customer service. 
            We are passionate about electronics and dedicated to helping you create a smarter, more 
            efficient, and comfortable home.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Electron Hub Store Front or Team" 
            width={600} 
            height={400}
            className="object-cover"
            data-ai-hint="modern electronics store" 
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-card rounded-lg shadow-sm">
            <h3 className="font-semibold text-primary mb-1">Quality Products</h3>
            <p className="text-sm text-muted-foreground">Carefully selected items from trusted brands.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow-sm">
            <h3 className="font-semibold text-primary mb-1">Expert Advice</h3>
            <p className="text-sm text-muted-foreground">Helpful guides and AI-powered recommendations.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow-sm">
            <h3 className="font-semibold text-primary mb-1">Customer Focused</h3>
            <p className="text-sm text-muted-foreground">Dedicated to your satisfaction and support.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
