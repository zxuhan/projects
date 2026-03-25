export const SLIDE_IDS = {
  TITLE: 'title',
  AGENTIC_WEBSITE: 'agentic-website',
  LIKE_SYSTEM: 'like-system',
  BUS_ROUTING: 'bus-routing',
  OVERVIEW: 'overview',
} as const;

export type SlideId = (typeof SLIDE_IDS)[keyof typeof SLIDE_IDS];

export const SLIDE_POSITIONS = {
  TITLE: { x: 0, y: 0, z: 0 },
  OVERVIEW: { x: 0, y: 0, z: 0, scale: 4.5 },
} as const;
