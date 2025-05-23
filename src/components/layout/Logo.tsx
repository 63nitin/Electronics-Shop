import Link from 'next/link';
import { Zap } from 'lucide-react'; // Using Zap as a simple logo icon

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
      <Zap className="h-7 w-7" />
      <span>Electron Hub</span>
    </Link>
  );
}
