import { ContributionRepo } from '../types/contribution';

export const contributionsData: ContributionRepo[] = [
  {
    org: 'pytorch',
    repo: 'pytorch',
    prs: [
      {
        title:
          'Docs: recommend stable ABI umbrella headers instead of *_struct.h',
        number: 181393,
        url: 'https://github.com/pytorch/pytorch/pull/181393',
        status: 'merged',
      },
      {
        title: "[dynamo] Skip wrap_inline for exec'd Python functions",
        number: 181531,
        url: 'https://github.com/pytorch/pytorch/pull/181531',
        status: 'merged',
      },
      {
        title: '[dynamo] Accept extra kwargs in CudagraphsBackend.__call__',
        number: 182989,
        url: 'https://github.com/pytorch/pytorch/pull/182989',
        status: 'merged',
      },
    ],
  },
  {
    org: 'react',
    repo: 'react',
    prs: [
      {
        title: '[DevTools] Preserve -Infinity in inspected values',
        number: 36347,
        url: 'https://github.com/react/react/pull/36347',
        status: 'merged',
      },
      {
        title: '[DOM] Keep controlled checkbox and radio state on form reset',
        number: 37668,
        url: 'https://github.com/react/react/pull/37668',
        status: 'open',
      },
      {
        title: "[DOM] Respect the submitter's formMethod in useFormStatus",
        number: 37543,
        url: 'https://github.com/react/react/pull/37543',
        status: 'open',
      },
    ],
  },
  {
    org: 'spring-projects',
    repo: 'spring-boot',
    prs: [
      {
        title: 'Document configuring multiple connectors with Jetty',
        number: 50206,
        url: 'https://github.com/spring-projects/spring-boot/pull/50206',
        status: 'merged',
      },
      {
        title:
          'ConfigurationPropertiesReportEndpoint exposes AOP proxy internals',
        number: 50273,
        url: 'https://github.com/spring-projects/spring-boot/pull/50273',
        status: 'merged',
      },
      {
        title: 'Expose Path getters on ApplicationHome and ApplicationTemp',
        number: 50194,
        url: 'https://github.com/spring-projects/spring-boot/pull/50194',
        status: 'merged',
      },
    ],
  },
  {
    org: 'spring-projects',
    repo: 'spring-ai',
    prs: [
      {
        title:
          'GH-5882: Preserve observation convention when copying advisor chain',
        number: 6039,
        url: 'https://github.com/spring-projects/spring-ai/pull/6039',
        status: 'merged',
      },
      {
        title:
          'GH-6119: Use class literal for ChatClient autoconf ordering',
        number: 6126,
        url: 'https://github.com/spring-projects/spring-ai/pull/6126',
        status: 'merged',
      },
      {
        title: 'Fall back to merge sort for PDF text positions',
        number: 6988,
        url: 'https://github.com/spring-projects/spring-ai/pull/6988',
        status: 'merged',
      },
      {
        title: 'Exclude current user message from RAG query history',
        number: 7080,
        url: 'https://github.com/spring-projects/spring-ai/pull/7080',
        status: 'open',
      },
      {
        title: 'Handle Ollama responses without a message',
        number: 7066,
        url: 'https://github.com/spring-projects/spring-ai/pull/7066',
        status: 'open',
      },
      {
        title: 'Report MCP method failures as INTERNAL_ERROR',
        number: 6038,
        url: 'https://github.com/spring-projects/spring-ai/pull/6038',
        status: 'open',
      },
    ],
  },
  {
    org: 'langchain4j',
    repo: 'langchain4j',
    prs: [
      {
        title:
          'PgVector: parenthesize isNotIn/isNotEqualTo to fix AND/OR precedence (#2513)',
        number: 5004,
        url: 'https://github.com/langchain4j/langchain4j/pull/5004',
        status: 'merged',
      },
      {
        title:
          'MCP: expose session id on StreamableHttpMcpTransport (#4757)',
        number: 5003,
        url: 'https://github.com/langchain4j/langchain4j/pull/5003',
        status: 'merged',
      },
    ],
  },
  {
    org: 'JetBrains',
    repo: 'koog',
    prs: [
      {
        title:
          'fix(prompt): accept text/plain Content-Type on Ollama non-streaming responses',
        number: 1887,
        url: 'https://github.com/JetBrains/koog/pull/1887',
        status: 'merged',
      },
      {
        title:
          'fix(prompt): stop additionalProperties leaking as additional_properties to OpenAI',
        number: 1884,
        url: 'https://github.com/JetBrains/koog/pull/1884',
        status: 'merged',
      },
    ],
  },
  {
    org: 'vercel',
    repo: 'next.js',
    prs: [
      {
        title:
          'Fix next/script onReady for multiple components with the same src',
        number: 99092,
        url: 'https://github.com/vercel/next.js/pull/99092',
        status: 'open',
      },
    ],
  },
  {
    org: 'vercel',
    repo: 'ai',
    prs: [
      {
        title:
          'fix(amazon-bedrock): disable native structured output for claude-opus-4-7',
        number: 15288,
        url: 'https://github.com/vercel/ai/pull/15288',
        status: 'merged',
      },
      {
        title:
          'fix(google): keep function tools when no provider-defined tool is supported',
        number: 20772,
        url: 'https://github.com/vercel/ai/pull/20772',
        status: 'open',
      },
      {
        title: 'feat(ai): support onAbort in ToolLoopAgent',
        number: 19673,
        url: 'https://github.com/vercel/ai/pull/19673',
        status: 'open',
      },
    ],
  },
  {
    org: 'kubernetes',
    repo: 'minikube',
    prs: [
      {
        title: 'build: bump tablewriter from 1.1.3 to 1.1.4',
        number: 22869,
        url: 'https://github.com/kubernetes/minikube/pull/22869',
        status: 'merged',
      },
      {
        title:
          'cmd/config: remove duplicate Header call in addon images table',
        number: 22871,
        url: 'https://github.com/kubernetes/minikube/pull/22871',
        status: 'open',
      },
    ],
  },
  {
    org: 'huggingface',
    repo: 'diffusers',
    prs: [
      {
        title:
          '[schedulers] fix RecursionError in CosineDPMSolverMultistepScheduler',
        number: 13754,
        url: 'https://github.com/huggingface/diffusers/pull/13754',
        status: 'open',
      },
    ],
  },
  {
    org: 'ClickHouse',
    repo: 'ClickHouse',
    prs: [
      {
        title:
          'Fix JSONHas and JSONExtractBool on native JSON returning the extracted value',
        number: 103313,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103313',
        status: 'merged',
      },
      {
        title: 'Reject GRANT role TO itself',
        number: 103315,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103315',
        status: 'merged',
      },
      {
        title: 'Report thread-count metrics for <protocols> endpoints',
        number: 103316,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103316',
        status: 'open',
      },
    ],
  },
  {
    org: 'axolotl-ai-cloud',
    repo: 'axolotl',
    prs: [
      {
        title: 'fix: probe GPU capabilities on Ray worker, not driver (#3179)',
        number: 3619,
        url: 'https://github.com/axolotl-ai-cloud/axolotl/pull/3619',
        status: 'merged',
      },
    ],
  },
];
