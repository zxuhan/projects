import { ContributionRepo } from '../types/contribution';

export const contributionsData: ContributionRepo[] = [
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
        title: 'Expose Path getters on ApplicationHome and ApplicationTemp',
        number: 50194,
        url: 'https://github.com/spring-projects/spring-boot/pull/50194',
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
      {
        title:
          'fix: PojoOutputParser includes inherited fields in format instructions',
        number: 4996,
        url: 'https://github.com/langchain4j/langchain4j/pull/4996',
        status: 'open',
      },
      {
        title: 'OpenAI: guard against empty choices in ChatCompletionResponse',
        number: 4988,
        url: 'https://github.com/langchain4j/langchain4j/pull/4988',
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
    org: 'pytorch',
    repo: 'pytorch',
    prs: [
      {
        title:
          '[ONNX] Do not rename passthrough values in call_function lowering',
        number: 181395,
        url: 'https://github.com/pytorch/pytorch/pull/181395',
        status: 'open',
      },
      {
        title:
          'Docs: recommend stable ABI umbrella headers instead of *_struct.h',
        number: 181393,
        url: 'https://github.com/pytorch/pytorch/pull/181393',
        status: 'open',
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
];
