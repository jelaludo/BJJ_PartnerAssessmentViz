'use server';

/**
 * @fileOverview Recommends specific drills or areas of focus for improvement based on assessment results.
 *
 * - getTrainingRecommendations - A function that generates training recommendations.
 * - TrainingRecommendationsInput - The input type for the getTrainingRecommendations function.
 * - TrainingRecommendationsOutput - The return type for the getTrainingRecommendations function.
 */

/*
import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TrainingRecommendationsInputSchema = z.object({
  controlledMovements: z.number().describe('Score for Controlled Movements (1-10).'),
  controlledSubmissions: z.number().describe('Score for Controlled Submissions (1-10).'),
  modularIntensity: z.number().describe('Score for Modular Intensity (1-10).'),
  depthOfKnowledge: z.number().describe('Score for Depth of Knowledge (1-10).'),
  injuryKnowledge: z.number().describe('Score for Knowledgeable about injury patterns (1-10).'),
  specificWork: z.number().describe('Score for Ability to work on specifics/give "looks" (1-10).'),
  controlledEgo: z.number().describe('Score for Controlled Ego (1-10).'),
  friendlyAttitude: z.number().describe('Score for Friendly, playful attitude (1-10).'),
  rdMindset: z.number().describe('Score for R&D mindset (discover & troubleshoot) (1-10).'),
  notOvertalking: z.number().describe('Score for Not overtalking/over-explaining (1-10).'),
  communicative: z.number().describe('Score for Communicative about boundaries and injuries (1-10).'),
  feedbackReceptivity: z.number().describe('Score for Feedback receptivity (1-10).'),
  safetyConsciousness: z.number().describe('Score for Safety consciousness (1-10).'),
  recoveryAwareness: z.number().describe('Score for Recovery awareness (1-10).'),
  identifyWeaknesses: z.number().describe('Score for Ability to identify weaknesses & improvements (1-10).'),
  hygiene: z.number().describe('Score for Hygiene (1-10).'),
  reliability: z.number().describe('Score for Reliability (1-10).'),
});
export type TrainingRecommendationsInput = z.infer<typeof TrainingRecommendationsInputSchema>;

const TrainingRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('AI-powered recommendations for specific drills or areas of focus.'),
});
export type TrainingRecommendationsOutput = z.infer<typeof TrainingRecommendationsOutputSchema>;

const trainingRecommendationsPrompt = ai.definePrompt({
  name: 'trainingRecommendationsPrompt',
  input: {
    schema: TrainingRecommendationsInputSchema,
  },
  output: {
    schema: TrainingRecommendationsOutputSchema,
  },
  prompt: `Based on the following BJJ training partner assessment scores, provide specific drills or areas of focus for improvement. Be brief and concise.
Also, add a tip about how the training partner can improve.

Technical Attributes:
- Controlled Movements: {{{controlledMovements}}}
- Controlled Submissions: {{{controlledSubmissions}}}
- Modular Intensity: {{{modularIntensity}}}
- Depth of Knowledge: {{{depthOfKnowledge}}}
- Knowledgeable about injury patterns: {{{injuryKnowledge}}}
- Ability to work on specifics/give "looks": {{{specificWork}}}

Mindset & Attitude:
- Controlled Ego: {{{controlledEgo}}}
- Friendly, playful attitude: {{{friendlyAttitude}}}
- R&D mindset (discover & troubleshoot): {{{rdMindset}}}
- Not overtalking/over-explaining: {{{notOvertalking}}}
- Communicative about boundaries and injuries: {{{communicative}}}
- Feedback receptivity: {{{feedbackReceptivity}}}
- Safety consciousness: {{{safetyConsciousness}}}
- Recovery awareness: {{{recoveryAwareness}}}
- Ability to identify weaknesses & improvements: {{{identifyWeaknesses}}}

Others:
- Hygiene: {{{hygiene}}}
- Reliability: {{{reliability}}}

Recommendations:`,
});

const trainingRecommendationsFlow = ai.defineFlow<
  typeof TrainingRecommendationsInputSchema,
  typeof TrainingRecommendationsOutputSchema
>({
  name: 'trainingRecommendationsFlow',
  inputSchema: TrainingRecommendationsInputSchema,
  outputSchema: TrainingRecommendationsOutputSchema,
}, async (input) => {
  const { output } = await trainingRecommendationsPrompt(input);
  return output!;
});

export async function getTrainingRecommendations(input: TrainingRecommendationsInput): Promise<TrainingRecommendationsOutput> {
  return trainingRecommendationsFlow(input);
}
*/
    
