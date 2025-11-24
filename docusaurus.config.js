// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Petority',
  tagline: 'The next generation of pet tracking',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.petority.net',
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
        title: 'HELP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/petaverse-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'devicesSidebar',
            position: 'left',
            label: 'Devices',
          },
          {
            type: 'docSidebar',
            sidebarId: 'petoritySidebar',
            position: 'left',
            label: 'WAGGURACY App',
          },
          //{ to: '/blog', label: 'Blog  position: 'left' },
          {
            href: 'https://www.petority.net',
            label: 'Back to Official',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Data Deletion Instructions',
                to: '/docs/data-deletion-instructions',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy-policy',
              },
              {
                label: 'Terms of Service',
                to: '/docs/terms-of-service',
              },
            ],
          },
          /* {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          }, */
        ],
        /* logo: {
          alt: 'Petaverse Logo',
          src: 'img/petaverse-logo.svg',
          href: 'https://www.petority.net',
          target: '_self',
          height: 50,
        }, */
        copyright: `Copyright © ${new Date().getFullYear()} WAGGURACY Pte. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config;
