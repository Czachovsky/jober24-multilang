export interface TestimonialsTypes {
  score: number;
  name: string;
  translationKey: string;
}

export const testimonials: TestimonialsTypes[] = [
  {
    translationKey: 'testimonials.story1',
    score: 5,
    name: "Anna N.",
  },
  {
    translationKey: 'testimonials.story2',
    score: 5,
    name: "Marek K.",
  },
  {
    translationKey: 'testimonials.story3',
    score: 5,
    name: "Jan W.",
  }
];
