// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const APP_STORE_URL =
  'https://apps.apple.com/us/app/wagguracy/id6776070186'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.wagguracy.app'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WAGGURACY',
  tagline: 'The next generation of pet tracking',
  favicon: 'img/WAGGURACY-logo.ico',

  // Set the production url of your site here
  url: 'https://wagguracy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'petaverse-cloud', // Usually your GitHub org/user name.
  projectName: 'pv-docs-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
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
          // editUrl:
          //   'https://github.com/petaverse-cloud/pv-docs-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/petaverse-cloud/pv-docs-site/tree/main/',
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
      colorMode: {
        defaultMode: 'light',
        //disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'WAGGURACY',
          src: 'img/WAGGURACY-logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Help Center',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'devicesSidebar',
                label: 'Devices',
              },
              {
                type: 'docSidebar',
                sidebarId: 'petoritySidebar',
                label: 'WAGGURACY App',
              },
            ],
          },
          // {
          //   href: '/#download',
          //   label: 'Download App',
          //   position: 'right',
          //   className: 'navbar-download-button',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Product',
          //   items: [
          //     {
          //       label: 'PHAST 1 Overview',
          //       to: '/docs/devices/getting-started/introduction',
          //     },
          //     {
          //       label: 'Features',
          //       to: '/docs/petority/get-to-know/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Help Center',
          //   items: [
          //     {
          //       label: 'Devices Docs',
          //       to: '/docs/devices/getting-started/introduction',
          //     },
          //     {
          //       label: 'App Docs',
          //       to: '/docs/petority/get-to-know/intro',
          //     },
          //   ],
          // },
          {
            title: 'Download',
            items: [
              {
                label: 'App Store',
                href: APP_STORE_URL,
              },
              {
                label: 'Google Play',
                href: GOOGLE_PLAY_URL,
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/docs/privacy-policy',
              },
              {
                label: 'Terms of Service',
                to: '/docs/terms-of-service',
              },
              {
                label: 'Data Deletion',
                to: '/docs/data-deletion-instructions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WAGGURACY Pte. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
