import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';
import gpuOperatorPreview from '../assets/gpuOperatorPreview.png';
import nocodeReview from '../assets/nocodePreview.png';
import likePreview from '../assets/likePreview.png';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.AGENTIC_WEBSITE,
    name: 'No Code',
    title: 'No Code',
    preview: nocodeReview,
    description:
      'A full-stack AI platform to generate, preview, and deploy web applications with LLMs and real-time streaming.',
    tech: ['Spring Boot 3', 'LangChain4j', 'Redis'],
    links: [
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
    preview: likePreview,
    description:
      'A high-concurrency like system with three-tier caching, HeavyKeeper algorithm for hot key detection, and event-driven async processing via Apache Pulsar.',
    tech: ['Spring Boot 3', 'Redis', 'Caffeine', 'Apache Pulsar'],
    links: [
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
    id: SLIDE_IDS.GPU_OPERATOR,
    name: 'GPU K8s Operator',
    title: 'GPU K8s Operator',
    preview: gpuOperatorPreview,
    description:
      'Rolling-window GPU-hour budgets for Kubernetes, enforced via eviction, pause, or alert.',
    tech: ['Go', 'Kubernetes', 'Kubebuilder', 'Prometheus'],
    links: [
      {
        type: 'code',
        url: 'https://github.com/zxuhan/gpu-k8s-operator',
        text: 'GitHub',
        githubRepo: 'zxuhan/gpu-k8s-operator',
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
    id: SLIDE_IDS.GPU_OPERATOR,
    name: 'GPU K8s Operator',
    icon: 'fas fa-microchip',
  },
  {
    id: SLIDE_IDS.OPEN_SOURCE,
    name: 'Open Source Contributions',
    icon: 'fas fa-code-branch',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];
