// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docusaurus Docs",
  tagline: "Documentation as Code playground",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://snikkrs.github.io",
  baseUrl: "/docusaurus-docs/",

  organizationName: "snikkrs",
  projectName: "docusaurus-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",

          // Versioning configuration
          lastVersion: "current",
          versions: {
            current: {
              label: "Unreleased 🚧",
            },
          },

          editUrl: "https://github.com/snikkrs/docusaurus-docs/tree/main/",
        },

        // Disable blog unless you explicitly want it
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "Home",
      logo: {
        alt: "Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/snikkrs/docusaurus-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} snikkrs. Built with love.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
