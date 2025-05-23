import { Container } from '@/components/layout/Container';
import { RecommendationForm } from '@/components/recommendations/RecommendationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personalized Product Finder',
  description: 'Let Electron Hub\'s AI help you find the perfect electronic products based on your browsing history and preferences.',
};

export default function RecommendationsPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <RecommendationForm />
      </div>
    </Container>
  );
}
