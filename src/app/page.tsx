'use client';

import {useState} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Slider} from '@/components/ui/slider';
import {Button} from '@/components/ui/button';
import {useToast} from '@/hooks/use-toast';

const archetypes = [
  'The Spazz',
  'The Brute',
  'The Frail old guy',
  'The Frail technical lady',
  'The killer green belt',
  'The professor',
  'The competitor',
  'The Chess Player',
  'The Natural Athlete',
  'The Hobbyist',
  'The Flaky Talent',
  'The Injury Collector',
  'The One-Trick Pony',
  'The Gear Obsessed',
];

interface AssessmentData {
  controlledMovements: number;
  controlledSubmissions: number;
  modularIntensity: number;
  depthOfKnowledge: number;
  injuryKnowledge: number;
  specificWork: number;
  controlledEgo: number;
  friendlyAttitude: number;
  rdMindset: number;
  notOvertalking: number;
  communicative: number;
  feedbackReceptivity: number;
  safetyConsciousness: number;
  recoveryAwareness: number;
  identifyWeaknesses: number;
  hygiene: number;
  reliability: number;
}

const initialAssessmentData: AssessmentData = {
  controlledMovements: 0,
  controlledSubmissions: 0,
  modularIntensity: 0,
  depthOfKnowledge: 0,
  injuryKnowledge: 0,
  specificWork: 0,
  controlledEgo: 0,
  friendlyAttitude: 0,
  rdMindset: 0,
  notOvertalking: 0,
  communicative: 0,
  feedbackReceptivity: 0,
  safetyConsciousness: 0,
  recoveryAwareness: 0,
  identifyWeaknesses: 0,
  hygiene: 0,
  reliability: 0,
};

export default function Home() {
  const [assessmentData, setAssessmentData] =
    useState<AssessmentData>(initialAssessmentData);
  const [selectedPartner, setSelectedPartner] = useState<string>('');
  const {toast} = useToast();

  const handleSliderChange = (
    attribute: keyof AssessmentData,
    value: number[],
  ) => {
    setAssessmentData(prevData => ({
      ...prevData,
      [attribute]: value[0],
    }));
  };

  const handleAddPartner = () => {
    // Placeholder function
    alert('Add partner functionality will be implemented soon!');
  };

  const handleComparePartners = () => {
    // Placeholder function
    alert('Compare partners functionality will be implemented soon!');
  };

  const generateRandomScores = () => {
    const newAssessmentData: AssessmentData = {
      controlledMovements: Math.floor(Math.random() * 10) + 1,
      controlledSubmissions: Math.floor(Math.random() * 10) + 1,
      modularIntensity: Math.floor(Math.random() * 10) + 1,
      depthOfKnowledge: Math.floor(Math.random() * 10) + 1,
      injuryKnowledge: Math.floor(Math.random() * 10) + 1,
      specificWork: Math.floor(Math.random() * 10) + 1,
      controlledEgo: Math.floor(Math.random() * 10) + 1,
      friendlyAttitude: Math.floor(Math.random() * 10) + 1,
      rdMindset: Math.floor(Math.random() * 10) + 1,
      notOvertalking: Math.floor(Math.random() * 10) + 1,
      communicative: Math.floor(Math.random() * 10) + 1,
      feedbackReceptivity: Math.floor(Math.random() * 10) + 1,
      safetyConsciousness: Math.floor(Math.random() * 10) + 1,
      recoveryAwareness: Math.floor(Math.random() * 10) + 1,
      identifyWeaknesses: Math.floor(Math.random() * 10) + 1,
      hygiene: Math.floor(Math.random() * 10) + 1,
      reliability: Math.floor(Math.random() * 10) + 1,
    };
    setAssessmentData(newAssessmentData);
  };

  const resetScores = () => {
    setAssessmentData(initialAssessmentData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-2xl font-bold tracking-tight text-primary">
        BJJ Training Partner Assessment
      </h1>

      <div className="flex flex-col w-full max-w-3xl p-4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Training Partner Assessment</CardTitle>
            <CardDescription>
              Assess your training partner across various attributes.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="partner">Select Training Partner</Label>
              <Select
                id="partner"
                value={selectedPartner}
                onValueChange={setSelectedPartner}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a partner"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="partner1">Partner 1</SelectItem>
                  <SelectItem value="partner2">Partner 2</SelectItem>
                  {archetypes.map(archetype => (
                    <SelectItem key={archetype} value={archetype}>
                      {archetype}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-red-400"/>
                <span>Needs Work (1-3)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-400"/>
                <span>Developing (4-7)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-400"/>
                <span>Excellent (8-10)</span>
              </div>
            </div>

            <div className="grid grid-cols-11 gap-2 text-center">
              <div></div>
              {Array.from({length: 10}, (_, i) => (
                <div key={i + 1}>{i + 1}</div>
              ))}
            </div>

            <div className="grid gap-4">
              <h2 className="font-semibold text-lg text-primary">Technical Attributes</h2>
              {Object.entries(assessmentData)
                .filter(([key]) => [
                  'controlledMovements',
                  'controlledSubmissions',
                  'modularIntensity',
                  'depthOfKnowledge',
                  'injuryKnowledge',
                  'specificWork',
                ].includes(key))
                .map(([attribute, value]: [string, number]) => (
                  <div key={attribute} className="grid grid-cols-11 gap-2 items-center">
                    <Label htmlFor={attribute} className="col-span-4 justify-self-start">
                      {attribute.replace(/([A-Z])/g, ' $1')}
                    </Label>
                    <div className="col-span-6">
                      <Slider
                        defaultValue={[value]}
                        max={10}
                        step={1}
                        onValueChange={(val) => handleSliderChange(attribute as keyof AssessmentData, val)}
                      />
                    </div>
                    <div className="col-span-1 text-center">{value}</div>
                  </div>
                ))}
            </div>

            <div className="grid gap-4">
              <h2 className="font-semibold text-lg text-primary">Mindset &amp; Attitude</h2>
              {Object.entries(assessmentData)
                .filter(([key]) => [
                  'controlledEgo',
                  'friendlyAttitude',
                  'rdMindset',
                  'notOvertalking',
                  'communicative',
                  'feedbackReceptivity',
                  'safetyConsciousness',
                  'recoveryAwareness',
                  'identifyWeaknesses',
                ].includes(key))
                .map(([attribute, value]: [string, number]) => (
                  <div key={attribute} className="grid grid-cols-11 gap-2 items-center">
                    <Label htmlFor={attribute} className="col-span-4 justify-self-start">
                      {attribute.replace(/([A-Z])/g, ' $1')}
                    </Label>
                    <div className="col-span-6">
                      <Slider
                        defaultValue={[value]}
                        max={10}
                        step={1}
                        onValueChange={(val) => handleSliderChange(attribute as keyof AssessmentData, val)}
                      />
                    </div>
                    <div className="col-span-1 text-center">{value}</div>
                  </div>
                ))}
            </div>

            <div className="grid gap-4">
              <h2 className="font-semibold text-lg text-primary">Others</h2>
              {Object.entries(assessmentData)
                .filter(([key]) => ['hygiene', 'reliability'].includes(key))
                .map(([attribute, value]: [string, number]) => (
                  <div key={attribute} className="grid grid-cols-11 gap-2 items-center">
                    <Label htmlFor={attribute} className="col-span-4 justify-self-start">
                      {attribute.replace(/([A-Z])/g, ' $1')}
                    </Label>
                    <div className="col-span-6">
                      <Slider
                        defaultValue={[value]}
                        max={10}
                        step={1}
                        onValueChange={(val) => handleSliderChange(attribute as keyof AssessmentData, val)}
                      />
                    </div>
                    <div className="col-span-1 text-center">{value}</div>
                  </div>
                ))}
            </div>

            <div className="flex space-x-4">
              <Button onClick={generateRandomScores}>Generate Random Scores</Button>
              <Button variant="secondary" onClick={resetScores}>
                Reset Scores
              </Button>
            </div>
            <Button onClick={handleAddPartner}>Add Training Partner</Button>
            <Button variant="secondary" onClick={handleComparePartners}>
              Compare Partners
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
