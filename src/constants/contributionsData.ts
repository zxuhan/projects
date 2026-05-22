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
        status: 'open',
      },
      {
        title:
          'Replace obsolete TORCHDYNAMO_DYNAMIC_SHAPES env var in torch.compile FAQ',
        number: 181526,
        url: 'https://github.com/pytorch/pytorch/pull/181526',
        status: 'open',
      },
    ],
  },
  {
    org: 'facebook',
    repo: 'react',
    prs: [
      {
        title: '[DevTools] Preserve -Infinity in inspected values',
        number: 36347,
        url: 'https://github.com/facebook/react/pull/36347',
        status: 'merged',
      },
      {
        title: '[shared] shallowEqual: avoid Object.keys(objB) allocation',
        number: 36348,
        url: 'https://github.com/facebook/react/pull/36348',
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
        title: 'Log condition report for child management context',
        number: 50378,
        url: 'https://github.com/spring-projects/spring-boot/pull/50378',
        status: 'open',
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
    org: 'kubernetes',
    repo: 'kubernetes',
    prs: [
      {
        title:
          'kube-aggregator: add request count and latency metrics for extension API servers',
        number: 138913,
        url: 'https://github.com/kubernetes/kubernetes/pull/138913',
        status: 'open',
      },
      {
        title: 'Remove redundant type assertions in CEL function bindings',
        number: 138912,
        url: 'https://github.com/kubernetes/kubernetes/pull/138912',
        status: 'open',
      },
      {
        title: 'Fix HPA tolerance drift during rolling updates',
        number: 138509,
        url: 'https://github.com/kubernetes/kubernetes/pull/138509',
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
          'fix(anthropic): treat bare ANTHROPIC_BASE_URL host as /v1 endpoint',
        number: 15545,
        url: 'https://github.com/vercel/ai/pull/15545',
        status: 'open',
      },
      {
        title:
          'fix(amazon-bedrock): accept citation deltas in Converse stream schema',
        number: 15501,
        url: 'https://github.com/vercel/ai/pull/15501',
        status: 'open',
      },
      {
        title: 'fix(cerebras): match actual Cerebras error envelope shape',
        number: 15386,
        url: 'https://github.com/vercel/ai/pull/15386',
        status: 'open',
      },
      {
        title: 'docs(ai): correct onToolCall JSDoc on return value handling',
        number: 15287,
        url: 'https://github.com/vercel/ai/pull/15287',
        status: 'open',
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
        status: 'open',
      },
      {
        title:
          'GH-5812: Use INTERNAL_ERROR for runtime exceptions in resource/prompt callbacks',
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
      {
        title: 'Add per-request HTTP read timeout (#4109)',
        number: 5073,
        url: 'https://github.com/langchain4j/langchain4j/pull/5073',
        status: 'open',
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
          'fix(prompt): forward Anthropic thinking signature through streaming',
        number: 2010,
        url: 'https://github.com/JetBrains/koog/pull/2010',
        status: 'open',
      },
      {
        title:
          'fix(prompt): preserve Google assistant text alongside tool calls',
        number: 1940,
        url: 'https://github.com/JetBrains/koog/pull/1940',
        status: 'open',
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
    ],
  },
  {
    org: 'huggingface',
    repo: 'diffusers',
    prs: [
      {
        title:
          '[pipelines] fix SD3 crash with pre-computed prompt_embeds and num_images_per_prompt',
        number: 13755,
        url: 'https://github.com/huggingface/diffusers/pull/13755',
        status: 'open',
      },
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
        status: 'merged',
      },
    ],
  },
];
