
// src/ai/flows/personalized-product-recommendations.ts
'use server';
/**
 * @fileOverview An AI agent that provides personalized product recommendations based on user history and preferences.
 *
 * - getPersonalizedProductRecommendations - A function that returns personalized product recommendations.
 * - PersonalizedProductRecommendationsInput - The input type for the getPersonalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the getPersonalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The user browsing history as a string of product ids or names they have viewed.'),
  preferences: z.string().describe('The user preferences, needs, or what they are looking for, as a string.'),
});
export type PersonalizedProductRecommendationsInput =
  z.infer<typeof PersonalizedProductRecommendationsInputSchema>;

const RecommendedProductSchema = z.object({
  name: z.string().describe('The name of the recommended product.'),
  reason: z.string().describe('A brief explanation of why this product is recommended for the user, tailored to their input.')
});

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(RecommendedProductSchema)
    .describe('A list of product recommendations. Each item should include a product name and a reason for the recommendation.'),
});
export type PersonalizedProductRecommendationsOutput =
  z.infer<typeof PersonalizedProductRecommendationsOutputSchema>;

export async function getPersonalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  prompt: `You are an expert in recommending products to users based on their browsing history and preferences.

  Based on the user's browsing history: {{{browsingHistory}}} and preferences: {{{preferences}}},
  recommend a list of products that the user might be interested in.
  
  For each product, provide:
  1. 'name': The name of the product.
  2. 'reason': A concise explanation of why this product is a good fit for the user, connecting it to their browsing history or stated preferences.

  The product recommendations should be tailored to the user's interests and needs.
  Be specific and provide enough details in the reason so the user can understand the relevance.
  Do not include any promotional or marketing language. Focus on providing objective and helpful information.
  The products that you recommend should be relevant to the browsing history and preferences.
  Do not recommend products that are not related to the user's interests.
  Consider suggesting similar or related products if appropriate.
  Output the recommendations as a list of objects, where each object contains a 'name' and a 'reason'.
  `,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
