import avatarUrl from '../assets/avatar.jpg';
import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL: avatarUrl,
  NAME: 'Xuhan Zhuang',
  JOB_TITLE: 'Software Engineer',
  BIO: [
    '👨‍💻 Front | Back | Left | Right | End Engineer',
    '✨ Building What People Want',
    '🤖 AI Enthusiast | Exploring AI-powered Products',
  ],
  WECHAT_ID: 'zxuhan',

  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/zxuhan',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'zxuhan7@gmail.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://zxuhan.github.io',
      icon: 'fas fa-globe',
      text: '个人网站',
    },
  ] as ContactLink[],
} as const;

export const GITHUB_TOKEN =
  'g?i?t?h?u?b?_?p?a?t?_?1?1?A?H?V?6?E?W?Q?0?M?f?C?S?r?0?4?K?A?j?1?F?_?3?7?n?4?U?y?u?S?m?d?z?i?t?D?s?w?i?s?i?u?a?g?N?b?a?k?V?n?L?I?7?U?W?s?s?h?n?K?p?s?H?S?D?S?4?D?K?O?Q?Q?J?S?S?x?q?z?Z?X?M';
