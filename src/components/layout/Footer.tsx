
import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">
            Your trusted source for home electronics.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
            <li><Link href="/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
            <li><Link href="/recommendations" className="text-muted-foreground hover:text-primary">Product Finder</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link href="/location" className="text-muted-foreground hover:text-primary">Location</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Email: abhishek915118611@gmail.com</li>
            <li>Phone: +91-8707581455</li>
            <li>Near Railway Crossing Tera Khas Chinhat Lucknow</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        &copy; {currentYear} Electron Hub. All rights reserved.
      </Container>
    </footer>
  );
}
