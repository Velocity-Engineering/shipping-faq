import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Velocity Shipping Help Center',
  tagline: 'Find answers to common questions about using Velocity Shipping',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://help.velocity.in',
  baseUrl: '/',

  onBrokenLinks: 'warn',

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
          routeBasePath: '/', // Serve docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Velocity Shipping',
      logo: {
        alt: 'Velocity Shipping Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Help Center',
        },
        {
          href: 'https://velocity.in/shipping',
          label: 'Back to Velocity',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Carrier Integrations',
              to: '/carrier-integrations',
            },
            {
              label: 'Shipping Rules',
              to: '/shipping-rules',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Automations',
              to: '/automations',
            },
            {
              label: 'Value Added Services',
              to: '/vas',
            },
            {
              label: 'Reports',
              to: '/reports',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:support@velocity.in',
            },
            {
              label: 'Velocity Website',
              href: 'https://velocity.in',
            },
            {
              label: 'Velocity Shipping',
              href: 'https://velocity.in/shipping',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Velocity. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Algolia search can be configured here when ready
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'velocity-shipping',
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
