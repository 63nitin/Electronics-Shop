
import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Location',
  description: 'Find Electron Hub\'s physical store location and get directions.',
};

export default function LocationPage() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086424958823!2d-122.41941548468157!3d37.77492927975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e94d7b3%3A0x5c1f0b0a0a4b9a0e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"; // Replace with your actual Google Maps embed URL

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
            <p className="text-muted-foreground">
                123 Electronic Avenue <br />
                Tech City, TC 54321 <br />
                United States
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">Store Hours</h2>
            <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 7:00 PM <br />
                Saturday: 10:00 AM - 6:00 PM <br />
                Sunday: Closed
            </p>
        </div>
      </div>
    </Container>
  );
}
