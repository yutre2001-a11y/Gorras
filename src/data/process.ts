import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: 1,
    title: 'Browse',
    description: 'Filter by payment rather than sticker price if that is how you actually budget. Every listing shows both.',
    duration: 'as long as you like',
  },
  {
    id: '2',
    number: 2,
    title: 'Pre-qualify',
    description: 'Soft credit check gives you a real rate and a real budget before anyone shakes your hand.',
    duration: '2 minutes',
  },
  {
    id: '3',
    number: 3,
    title: 'Test drive',
    description: 'Take it on the highway, not around the block. Bring your car seat and check that it fits.',
    duration: '30-45 minutes',
  },
  {
    id: '4',
    number: 4,
    title: 'Sign and go',
    description: 'Paperwork is prepared before you arrive. No surprise add-ons in the finance office, because we do not sell them there.',
    duration: 'about an hour',
  },
];
