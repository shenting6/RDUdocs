// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RDU File System',
  tagline: 'RemainingDreamsUnfolding File System',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rduteam.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: false,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'logs',
        path: 'logs',
        routeBasePath: 'logs',
        sidebarPath: './sidebarslogs.js',
        // 其他选项
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'other',
        path: 'other',
        routeBasePath: 'other',
        sidebarPath: './sidebarslogs.js',
        // 其他选项
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Disclaimers',
        path: 'Disclaimers',
        routeBasePath: 'Disclaimers',
        sidebarPath: './sidebarslogs.js',
        // 其他选项
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      customCss: require.resolve('./src/css/custom.css'),
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RDUdocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'CharacterProfile',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            docsPluginId: "logs",
            label: 'InvestigationRecords',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            docsPluginId: "other",
            label: 'Other',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            docsPluginId: "Disclaimers",
            label: 'Disclaimers',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CharacterProfile',
                to: '/docs/intro',
              },
              {
                label: 'InvestigationRecords',
                to: '/logs/intro',
              },
              {
                label: 'Other',
                to: '/other/events/intro',
              },
              {
                label: 'Disclaimers',
                to: '/Disclaimers',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'MinecraftServer',
                to: ' ',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 什亭之人`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
