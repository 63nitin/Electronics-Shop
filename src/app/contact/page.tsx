
import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Dikshant Electronics. We\'re here to help with your questions and support needs.',
};

export default function ContactPage() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.220738936886!2d81.05942497489335!3d26.864727062152085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3d7c5c2f5f3%3A0x8360ca64d275fce6!2sDikshant%20Electronics!5e0!3m2!1sen!2sin!4v1748066304018!5m2!1sen!2sin"; // Replace with your actual Google Maps embed URL

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
            <a href="mailto:abhishek915118611@gmail.com" className="text-muted-foreground hover:text-primary text-lg">
              abhishek915118611@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
              <Phone className="h-6 w-6 mr-3 text-primary" /> Call Us
            </h2>
            <a href="tel:+91-8707581455" className="text-muted-foreground hover:text-primary text-lg">
              +91-8707581455
            </a>
            <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 9am - 9pm</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-primary" /> Our Address
            </h2>
            <address className="text-muted-foreground text-lg not-italic">
              Dikshant Electronics <br />
              Near Railway Crossing Tera Khas  <br />
              Satrik Road, Chinhat <br />
              Lucknow-226028
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
