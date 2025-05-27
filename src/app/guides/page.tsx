import { Container } from '@/components/layout/Container';
import { GuideCard } from '@/components/guides/GuideCard';
import { getAllGuides } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Guides & Tutorials | Dikshant Electronics',
  description: 'Explore helpful guides and tutorials for your electronic items from Electron Hub.',
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <Container className="py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">Product Guides & Tutorials</h1>
        <p className="text-lg text-muted-foreground mt-2">Learn how to make the most of your electronics.</p>
      </div>
      
      {guides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No guides available at the moment. Check back soon!</p>
      )}
    </Container>
  );
}
