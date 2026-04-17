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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-docs',
        path: 'api-docs',
        routeBasePath: 'api',
        sidebarPath: './sidebarsApi.ts',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
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
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          docsPluginId: 'api-docs',
          position: 'left',
          label: 'API Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© 2020-${new Date().getFullYear()} White Wizard Technologies Pvt. Ltd. All Rights Reserved.`,
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
