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
            "0.1.0": {
              label: "v0.1.0",
              banner: "none",
              noIndex: false,
            },
            "0.2.0": {
              label: "v0.2.0",
              banner: "none",
              noIndex: false,
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
      title: "Docs",
      logo: {
        alt: "Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
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
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/snikkrs/docusaurus-docs",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} snikkrs. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
