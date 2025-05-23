import type { Guide } from '@/types/domain';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {guide.imageUrl && (
        <CardHeader className="p-0">
          <Link href={`/guides/${guide.slug}`} className="block">
            <div className="aspect-video overflow-hidden">
              <Image
                src={guide.imageUrl}
                alt={guide.title}
                width={400}
                height={225}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={`${guide.category} guide`}
              />
            </div>
          </Link>
        </CardHeader>
      )}
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1">
          <Link href={`/guides/${guide.slug}`} className="hover:text-primary transition-colors">
            {guide.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{guide.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild variant="outline" size="sm">
          <Link href={`/guides/${guide.slug}`}>
            Read Guide <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
