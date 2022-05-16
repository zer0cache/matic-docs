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
    },
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: "c3ad4eabc5af314ea3ed331efbe0a5c4",
      indexName: "matic_developer",
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
        srcDark: "/img/polygon/polygon-logo-inverted.png",
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
          label: "Developer Resources",
          position: "right",
        },
        {
          label: "Community",
          href: "https://polygon.technology/community/",
          position: "right",
        },
        {
          label: "Support",
          href: "https://polygon.technology/developer-support-program/",
          position: "right",
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          to: "docs/contribute/orientation/",
          label: "Contribute to the Wiki",
          position: "right",
          activeBasePath: "docs/contribute",
        },
        /*
        {
          type: 'localeDropdown',
          position: 'right',
        },
        */
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
