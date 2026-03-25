import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.AGENTIC_WEBSITE,
    name: 'No Code',
    title: 'No Code',
    preview: '', // ← import your asset at the top and replace this
    description:
      'A full-stack AI platform to generate, preview, and deploy web applications with LLMs and real-time streaming.',
    tech: ['Spring Boot 3', 'LangChain4j', 'Redis'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/zxuhan/AI-code-platform',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/zxuhan/AI-code-platform',
        text: 'GitHub',
        githubRepo: 'zxuhan/AI-code-platform',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.LIKE_SYSTEM,
    name: 'High-Performance Like System',
    title: 'High-Performance Like System',
    preview: '',
    description:
      'A high-concurrency like system with three-tier caching, HeavyKeeper algorithm for hot key detection, and event-driven async processing via Apache Pulsar.',
    tech: ['Spring Boot 3', 'Redis', 'Caffeine', 'Apache Pulsar'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/zxuhan/like-app-backend',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/zxuhan/like-app-backend',
        text: 'GitHub',
        githubRepo: 'zxuhan/like-app-backend',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.BUS_ROUTING,
    name: 'Via Maastricht',
    title: 'Via Maastricht',
    preview: '',
    description:
      'A full-stack transit routing app with Spring Boot3 and customized A* search over GTFS data. React frontend with zip code autocomplete and Google Maps JS API.',
    tech: ['Spring Boot 3', 'React', 'A* Algorithm'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/zxuhan/bus-routing',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/zxuhan/bus-routing',
        text: 'GitHub',
        githubRepo: 'zxuhan/bus-routing',
      },
    ],
    layout: 'standard',
  },
];

export const mapData = [
  {
    id: SLIDE_IDS.TITLE,
    name: 'Introduction',
    icon: 'fas fa-home',
  },
  {
    id: SLIDE_IDS.AGENTIC_WEBSITE,
    name: 'Agentic Website Builder',
    icon: 'fas fa-robot',
  },
  {
    id: SLIDE_IDS.LIKE_SYSTEM,
    name: 'High-Performance Like System',
    icon: 'fas fa-heart',
  },
  {
    id: SLIDE_IDS.BUS_ROUTING,
    name: 'Maastricht Bus Routing App',
    icon: 'fas fa-bus',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];
