import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GPU Passthrough Made Easy',
  tagline: 'Made GPU-Passthru easy, for everyone. Just follow our simple guide!',
  favicon: 'img/gpu.png',

  // Set the production url of your site here
  url: 'https://gpu-passthru.ummit.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UmmItC', // Usually your GitHub org/user name.
  projectName: 'gpu-passthru', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UmmItC/gpu-passthru/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UmmItC/gpu-passthru/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'gpu-passthru',
      logo: {
        alt: 'gpu-passthru Logo',
        src: 'img/gpu.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Getting Started',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Source code',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/UmmItC/gpu-passthru',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} gpu-passthru, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'dark', // Set dark mode as the default
      disableSwitch: false, // Allow users to switch between light and dark mode
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
