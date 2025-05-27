
import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Location',
  description: 'Find Electron Hub\'s physical store location and get directions.',
};

export default function LocationPage() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.220738936886!2d81.05942497489335!3d26.864727062152085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3d7c5c2f5f3%3A0x8360ca64d275fce6!2sDikshant%20Electronics!5e0!3m2!1sen!2sin!4v1748066304018!5m2!1sen!2sin"; // Replace with your actual Google Maps embed URL

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Visit Our Store</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We're conveniently located and ready to help you with all your electronic needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-8">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Electron Hub Location"
            aria-label="Google Map showing Electron Hub location"
          ></iframe>
        </div>
        
        <div className="text-center prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Our Address</h2>
           <address className="text-muted-foreground text-lg not-italic">
              Dikshant Electronics <br />
              Near Railway Crossing Tera Khas  <br />
              Satrik Road, Chinhat-226028 <br />
              Lucknow
            </address>
            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">Store Hours</h2>
            <p className="text-muted-foreground">
                Monday - Sundayi: 9:00 AM - 9:00 PM <br />
  
            </p>
        </div>
      </div>
    </Container>
  );
}
