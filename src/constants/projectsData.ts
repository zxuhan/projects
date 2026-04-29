import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';
import gpuOperatorPreview from '../assets/gpuOperatorPreview.png';
import aiCodePreview from '../assets/aiCodePreview.png';
import folioWriterPreview from '../assets/folioWriterPreview.png';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.FOLIO_WRITER,
    name: 'Folio — AI Article Studio',
    title: 'Folio — AI Article Studio',
    preview: folioWriterPreview,
    description:
      'Multi-agent article generator on Spring AI Alibaba StateGraph: token streaming over SSE, parallel image generation across six providers, and an explicit phase state machine you can intervene in.',
    tech: ['Spring Boot 3', 'Spring AI Alibaba', 'Vue 3'],
    topics: ['Multi-Agent', 'StateGraph', 'SSE Streaming'],
    links: [
      {
        type: 'demo',
        url: 'https://folio.zxuhan.me/',
        text: 'Live',
      },
      {
        type: 'code',
        url: 'https://github.com/zxuhan/folio-writer',
        text: 'GitHub',
        githubRepo: 'zxuhan/folio-writer',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AGENTIC_WEBSITE,
    name: 'AI Code Platform',
    title: 'AI Code Platform',
    preview: aiCodePreview,
    description:
      'One prompt → working web app. LangChain4j multi-model routing across Gemini 2.5, tool-calling Vue scaffolding, SSE streaming, and per-app chat memory on Redis + MySQL.',
    tech: ['Spring Boot 3', 'LangChain4j', 'Vue 3', 'Redis'],
    topics: ['Code Generation', 'Tool Calling', 'SSE Streaming'],
    links: [
      {
        type: 'demo',
        url: 'https://ai-code.zxuhan.me/',
        text: 'Live',
      },
      {
        type: 'code',
        url: 'https://github.com/zxuhan/AI-code-platform',
        text: 'GitHub',
        githubRepo: 'zxuhan/AI-code-platform',
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
    topics: ['Operator Pattern', 'GPU Quota', 'Observability'],
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
    id: SLIDE_IDS.FOLIO_WRITER,
    name: 'Folio — AI Article Studio',
    icon: 'fas fa-pen-nib',
  },
  {
    id: SLIDE_IDS.AGENTIC_WEBSITE,
    name: 'AI Code Platform',
    icon: 'fas fa-robot',
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
