
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPersonalizedProductRecommendations, PersonalizedProductRecommendationsInput, PersonalizedProductRecommendationsOutput } from '@/ai/flows/personalized-product-recommendations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, ListChecks } from 'lucide-react';

const formSchema = z.object({
  browsingHistory: z.string().min(10, "Please provide some browsing history (e.g., product names or IDs you've looked at).").max(500),
  preferences: z.string().min(10, "Describe your preferences or what you're looking for.").max(500),
});

type RecommendationFormValues = z.infer<typeof formSchema>;

export function RecommendationForm() {
  const [recommendationsOutput, setRecommendationsOutput] = useState<PersonalizedProductRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      browsingHistory: '',
      preferences: '',
    },
  });

  async function onSubmit(values: RecommendationFormValues) {
    setIsLoading(true);
    setRecommendationsOutput(null);
    try {
      const result = await getPersonalizedProductRecommendations(values);
      setRecommendationsOutput(result);
      toast({
        title: "Recommendations Ready!",
        description: "We've found some products you might like.",
      });
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        title: "Error",
        description: "Could not fetch recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            Personalized Product Finder
          </CardTitle>
          <CardDescription>
            Tell us a bit about your recent browsing and what you're looking for, and our AI will suggest some products.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="browsingHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Browsing History</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Smart Ceiling Fan X100, 14-gauge copper wire, LED smart bulbs..."
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences / Needs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Looking for energy-efficient items, need tools for a DIY project, prefer smart home compatible devices..."
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-5 w-5" />
                )}
                Get Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center py-8">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Finding the best products for you...</p>
        </div>
      )}

      {recommendationsOutput && recommendationsOutput.recommendations && recommendationsOutput.recommendations.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-primary" />
              Your Personalized Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendationsOutput.recommendations.map((rec, index) => (
              <Alert key={index} className="shadow-sm">
                <AlertTitle className="font-semibold text-primary">{rec.name}</AlertTitle>
                <AlertDescription className="text-foreground/80">{rec.reason}</AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>
      )}

      {recommendationsOutput && (!recommendationsOutput.recommendations || recommendationsOutput.recommendations.length === 0) && !isLoading && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>No Specific Recommendations Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We couldn't find specific product recommendations based on your input. Try adjusting your browsing history or preferences.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
