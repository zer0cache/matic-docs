module.exports = {
  title: "Polygon Technology | Documentation",
  tagline: "Welcome to Polygon developer documentation",
  url: "https://docs.polygon.technology/",
  baseUrl: "/",
  favicon: "img/polygon/polygon-logo.svg",
  organizationName: "Polygon Technology",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Polygon.",
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/',
            from: ['/en/latest', '/en/'],
          },
          {
            to: '/docs/contribute/orientation',
            from: '/docs/pos/orientation',
          },
          {
            to: '/docs/contribute/community-maintainers',
            from: '/docs/pos/community-maintainers',
          },
          {
            to: '/docs/contribute/bug-bountry-program',
            from: '/docs/pos/bug-bountry-programs',
          },

        ],
        createRedirects: function (existingPath) {
          if (existingPath.startsWith('/docs/validate/')) {
            return [existingPath.replace('/docs/maintain/')
          ];
          }
        },
      },
    ],
  ],
  onBrokenLinks: 'log',
  themeConfig: {
    footer: {
      /*
      links: [
        {
          title: "Developers",
          items: [
          {
              label: "Get Started",
              href: "https://docs.polygon.technology/docs/develop/getting-started"
          },
          {
              label: "Advocate Program",
              href: "https://polygon.technology/advocate-program"
          },
          {
            label: "Funds",
            href: "https://polygon.technology/funds/"
          },
          {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
          },
          {
            label: "DApps",
            href: "https://polygon.technology/ecosystem"
          },
          {
            label: "PoS Wallet",
            href: "https://wallet.polygon.technology/"
          },
      ]
      },
      {
        title: "Company",
        items: [
        {
            label: "Polygon Technology",
            href: "https://polygon.technology/"
        },
        {
            label: "Blogs",
            href: "https://blog.polygon.technology/"
        },
        {
          label: "Brand Kit",
          href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058"
        },
        {
            label: "Careers",
            href: "https://polygon.technology/careers/"
        },
        {
          label: "Contact",
          href: "https://polygon.technology/contact-us/"
        },
        {
          label: "About Us",
          href: "https://polygon.technology/about/"
        },
    ]
    },
      ],
      */
      logo: {
        alt: 'Polygon Logo',
        src: 'img/polygon/polygon-logo.svg',
        href: 'https://polygon.technology/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Polygon Technology`,
    },
    announcementBar: {
      id: "support_us",
      content:
        '🎉 Polygon Mainnet <a target="_blank" rel="noopener noreferrer" href="/docs/develop/network-details/network"/>is open for developers 🎉! ',
      backgroundColor: "#8247e5", // Defaults to `#fff`
      textColor: "#fff", // Defaults to `#000`
    },
    // googleAnalytics: {
    //   trackingID: "UA-141789564-1",
    //   anonymizeIP: true,
    // },
    image: "https://matic.network/banners/matic-network-16x9.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "757c19b23127e9c6959da7f13b71cfab",
      contextualSearch: false,
      algoliaOptions: {},
    },
    announcementBar: {
      id: 'doc revamp message',
      content:
        'The team is currently revamping the docs site.',
      backgroundColor: '#eacbfc',
      textColor: '91E42',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon/polygon-logo.webp",
        srcDark: "/img/polygon/polygon-logo.webp",
        // width: 100,
        // height: 500,
        // href: 'https://docs.polygon.technology/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          label: "dApps",
          position: "right",
          items: [
                  {
                    href: 'https://wallet.polygon.technology/login?next=%2Fwallet',
                    label: 'PoS Wallet',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://wallet.polygon.technology/login?next=%2Fbridge',
                    label: 'PoS Bridge',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://polygon.technology/staking',
                    label: 'PoS Staking',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://wallet.polygon.technology/login?next=%2Fwidget-dashboard',
                    label: 'PoS Widget',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://polygonscan.com/',
                    label: 'PoS Explorer',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://hermez.io/wallet',
                    label: 'Hermez Wallet',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://explorer.hermez.io/',
                    label: 'Hermez Explorer',
                    target: '_blank',
                    rel: null,
                  },
                ],
        },
        {
          href: 'https://polygon.technology/developers/',
          label: "Developer resources",
          position: "right",
        },
        {
          label: "Community",
          position: "right",
          items: [
                  {
                    href: 'https://discord.gg/tCmCbEff66',
                    label: 'Discord',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://forum.polygon.technology/',
                    label: 'Forum',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://www.reddit.com/r/0xPolygon/',
                    label: 'Reddit',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://twitter.com/0xPolygon',
                    label: 'Twitter',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://t.me/polygonofficial',
                    label: 'Telegram',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://polygon.technology/community/',
                    label: 'View all communities',
                    target: '_blank',
                    rel: null,
                  },
                ],
        },
        {
          label: "Support",
          href: "https://polygon.technology/developer-support-program/",
          position: "right",
        },
        {
          label: "FAQs",
          position: "right",
          items: [
                  {
                    to: 'docs/faq/general-faq/',
                    label: 'PoS FAQ',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    to: 'docs/avail/faq',
                    label: 'Avail FAQ',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    to: 'docs/nightfall/faq/',
                    label: 'Nightfall FAQ',
                    target: '_blank',
                    rel: null,
                  }
                ],
        },
        {
          to: "docs/contribute/orientation/",
          label: "Contribute to the Wiki",
          position: "right",
          activeBasePath: "docs/contribute",
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/maticnetwork/matic-docs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
