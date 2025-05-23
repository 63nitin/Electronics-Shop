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
    .describe('The user browsing history as a string of product ids.'),
  preferences: z.string().describe('The user preferences as a string.'),
});
export type PersonalizedProductRecommendationsInput =
  z.infer<typeof PersonalizedProductRecommendationsInputSchema>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  productRecommendations: z
    .string()
    .describe('A list of product recommendations based on browsing history and preferences.'),
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
  recommend a list of products that the user might be interested in. Output the product recommendations as a string.
  The product recommendations should be tailored to the user's interests and needs.
  Be specific and provide enough details about each product so the user can make an informed decision.
  Do not include any promotional or marketing language. Focus on providing objective and helpful information.
  The products that you recommend should be relevant to the browsing history and preferences.
  Do not recommend products that are not related to the user's interests.
  Consider suggesting similar or related products.
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
