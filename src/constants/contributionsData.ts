import { ContributionRepo } from '../types/contribution';

export const contributionsData: ContributionRepo[] = [
  {
    org: 'pytorch',
    repo: 'pytorch',
    prs: [
      {
        title: "[dynamo] Skip wrap_inline for exec'd Python functions",
        number: 181531,
        url: 'https://github.com/pytorch/pytorch/pull/181531',
        status: 'open',
      },
      {
        title:
          'Replace obsolete TORCHDYNAMO_DYNAMIC_SHAPES env var in torch.compile FAQ',
        number: 181526,
        url: 'https://github.com/pytorch/pytorch/pull/181526',
        status: 'open',
      },
      {
        title:
          'Docs: recommend stable ABI umbrella headers instead of *_struct.h',
        number: 181393,
        url: 'https://github.com/pytorch/pytorch/pull/181393',
        status: 'merged',
      },
    ],
  },
  {
    org: 'facebook',
    repo: 'react',
    prs: [
      {
        title: '[shared] shallowEqual: avoid Object.keys(objB) allocation',
        number: 36348,
        url: 'https://github.com/facebook/react/pull/36348',
        status: 'open',
      },
      {
        title: '[DevTools] Preserve -Infinity in inspected values',
        number: 36347,
        url: 'https://github.com/facebook/react/pull/36347',
        status: 'merged',
      },
    ],
  },
  {
    org: 'tensorflow',
    repo: 'tensorflow',
    prs: [
      {
        title:
          "Grappler: don't rewrite ArgMin/ArgMax over non-strictly-monotonic ops",
        number: 116709,
        url: 'https://github.com/tensorflow/tensorflow/pull/116709',
        status: 'open',
      },
    ],
  },
  {
    org: 'kubernetes',
    repo: 'kubernetes',
    prs: [
      {
        title: 'Fix HPA tolerance drift during rolling updates',
        number: 138509,
        url: 'https://github.com/kubernetes/kubernetes/pull/138509',
        status: 'open',
      },
    ],
  },
  {
    org: 'spring-projects',
    repo: 'spring-boot',
    prs: [
      {
        title:
          'ConfigurationPropertiesReportEndpoint exposes AOP proxy internals',
        number: 50273,
        url: 'https://github.com/spring-projects/spring-boot/pull/50273',
        status: 'open',
      },
      {
        title: 'Document configuring multiple connectors with Jetty',
        number: 50206,
        url: 'https://github.com/spring-projects/spring-boot/pull/50206',
        status: 'merged',
      },
      {
        title: 'Expose Path getters on ApplicationHome and ApplicationTemp',
        number: 50194,
        url: 'https://github.com/spring-projects/spring-boot/pull/50194',
        status: 'open',
      },
    ],
  },
  {
    org: 'JetBrains',
    repo: 'koog',
    prs: [
      {
        title:
          'fix(prompt): preserve Google assistant text alongside tool calls',
        number: 1940,
        url: 'https://github.com/JetBrains/koog/pull/1940',
        status: 'open',
      },
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
      {
        title:
          'feat(prompt): add LM Studio client as OpenAI-compatible provider',
        number: 1873,
        url: 'https://github.com/JetBrains/koog/pull/1873',
        status: 'open',
      },
    ],
  },
  {
    org: 'langchain4j',
    repo: 'langchain4j',
    prs: [
      {
        title: 'Add per-request HTTP read timeout (#4109)',
        number: 5073,
        url: 'https://github.com/langchain4j/langchain4j/pull/5073',
        status: 'open',
      },
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
      {
        title:
          'fix: PojoOutputParser includes inherited fields in format instructions',
        number: 4996,
        url: 'https://github.com/langchain4j/langchain4j/pull/4996',
        status: 'open',
      },
    ],
  },
  {
    org: 'ClickHouse',
    repo: 'ClickHouse',
    prs: [
      {
        title: 'Report thread-count metrics for <protocols> endpoints',
        number: 103316,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103316',
        status: 'open',
      },
      {
        title: 'Reject GRANT role TO itself',
        number: 103315,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103315',
        status: 'open',
      },
      {
        title: 'Fix JSONHas on native JSON returning the extracted value',
        number: 103313,
        url: 'https://github.com/ClickHouse/ClickHouse/pull/103313',
        status: 'open',
      },
    ],
  },
  {
    org: 'vllm-project',
    repo: 'vllm',
    prs: [
      {
        title:
          '[Bugfix] Quiet weight prefetch logs when executor is shutting down',
        number: 40615,
        url: 'https://github.com/vllm-project/vllm/pull/40615',
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
        status: 'open',
      },
    ],
  },
  {
    org: 'kubernetes',
    repo: 'minikube',
    prs: [
      {
        title:
          'crio: use V2 registries.conf with unqualified-search-registries',
        number: 22872,
        url: 'https://github.com/kubernetes/minikube/pull/22872',
        status: 'open',
      },
      {
        title:
          'cmd/config: remove duplicate Header call in addon images table',
        number: 22871,
        url: 'https://github.com/kubernetes/minikube/pull/22871',
        status: 'open',
      },
      {
        title:
          'podman: propagate network, static-ip, and gpus flags to kic driver',
        number: 22870,
        url: 'https://github.com/kubernetes/minikube/pull/22870',
        status: 'open',
      },
      {
        title: 'gomod: bump tablewriter from 1.1.3 to 1.1.4',
        number: 22869,
        url: 'https://github.com/kubernetes/minikube/pull/22869',
        status: 'merged',
      },
    ],
  },
  {
    org: 'tmc',
    repo: 'langchaingo',
    prs: [
      {
        title:
          'llms: support SystemChatMessage in ChatMessageModel.ToChatMessage',
        number: 1496,
        url: 'https://github.com/tmc/langchaingo/pull/1496',
        status: 'open',
      },
      {
        title:
          'chains: export ChainCallOptions so custom Chain implementations can read options',
        number: 1495,
        url: 'https://github.com/tmc/langchaingo/pull/1495',
        status: 'open',
      },
      {
        title: 'anthropic: preserve all parts in AI message serialization',
        number: 1494,
        url: 'https://github.com/tmc/langchaingo/pull/1494',
        status: 'open',
      },
    ],
  },
];
