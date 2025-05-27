import { Container } from '@/components/layout/Container';
import { ProductList } from '@/components/products/ProductList';
import { getAllProducts, getProductsByCategory, productCategories } from '@/lib/data';
import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { Search, ListFilter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Products | Dikshant Electronics',
  description: 'Browse all electronic products available at Electron Hub. Find fans, wires, tools, and more.',
};

interface ProductsPageProps {
  searchParams?: {
    category?: string;
    search?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const selectedCategory = searchParams?.category;
  const searchTerm = searchParams?.search?.toLowerCase();

  let products = selectedCategory ? getProductsByCategory(selectedCategory) : getAllProducts();

  if (searchTerm) {
    products = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  }
  
  // This is a server component, so we can't use useRouter for form submission navigation directly.
  // We'll use links for categories and a form that reloads the page with search params.
  // For a more SPA-like experience, client components would be needed for filter updates.

  return (
    <Container className="py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">Our Products</h1>
        <p className="text-lg text-muted-foreground mt-2">Find the best electronic solutions for your home.</p>
      </div>

      <div className="mb-8 p-6 bg-card rounded-lg shadow-sm">
        <form method="GET" action="/products" className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-foreground mb-1">Search Products</label>
            <div className="relative">
              <Input 
                type="search" 
                id="search" 
                name="search" 
                placeholder="e.g., smart fan, copper wire..." 
                defaultValue={searchTerm || ''}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">Category</label>
            <Select name="category" defaultValue={selectedCategory || 'all'}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {productCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="md:col-start-3 bg-primary hover:bg-primary/90">
            <ListFilter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </form>
      </div>
      
      <ProductList products={products} />
    </Container>
  );
}
