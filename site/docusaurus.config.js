// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '⚡️ The All-In-One Open Source Data Platform',
  tagline: 'Experience faster creation of data & AI products without loosing control thanks to Naas Lean Data Framework.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jupypter-naas', // Usually your GitHub org/user name.
  projectName: 'awesome-notebooks', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        style: 'dark',
        title: '',
        logo: {
          alt: 'Naas v2 Documentation',
          src: 'https://landen.imgix.net/jtci2pxwjczr/assets/5ice39g4.png?w=186',
        },
        items: [
          {
            type: 'dropdown',
            label: 'How it works',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Getting started',
                docId: 'getting-started/installation',
              },
              {
                type: 'doc',
                label: 'Core components',
                docId: 'core-components/jobs/scheduler',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Solutions',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Content management',
                docId: 'solutions/content-engine',
              },
              {
                sidebarId: 'growth-marketing',
                type: 'doc',
                label: 'Growth Marketing',
                docId: 'solutions/growth-engine',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources & Support',
            position: 'left',
            items: [
              {
                href: 'https://github.com/jupyter-naas',
                label: 'GitHub',
                position: 'left',
              },
              {
                to: '/blog', 
                label: 'Blog', 
                position: 'left'
              },
            ],
          },
          {
            href: '/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {

          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Docs',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/jupyter-naas/naas',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} NaasAI, Inc.`,
      // },
      prism: {
        theme: darkCodeTheme,
        // darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
