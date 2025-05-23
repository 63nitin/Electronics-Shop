
import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Electron Hub. We\'re here to help with your questions and support needs.',
};

export default function ContactPage() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086424958823!2d-122.41941548468157!3d37.77492927975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e94d7b3%3A0x5c1f0b0a0a4b9a0e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"; // Replace with your actual Google Maps embed URL

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have questions or need support? Reach out to us!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
              <Mail className="h-6 w-6 mr-3 text-primary" /> Email Us
            </h2>
            <a href="mailto:support@electronhub.com" className="text-muted-foreground hover:text-primary text-lg">
              support@electronhub.com
            </a>
            <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
              <Phone className="h-6 w-6 mr-3 text-primary" /> Call Us
            </h2>
            <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary text-lg">
              (123) 456-7890
            </a>
            <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 5pm (Tech Timezone)</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-primary" /> Our Address
            </h2>
            <address className="text-muted-foreground text-lg not-italic">
              Electron Hub <br />
              123 Electronic Avenue <br />
              Tech City, TC 54321 <br />
              United States
            </address>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 text-center md:text-left">Find Us On The Map</h2>
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Electron Hub Location Map"
              aria-label="Google Map showing Electron Hub location"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
