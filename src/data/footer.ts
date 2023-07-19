const socials: FooterData["socials"] = [
  {
    icon: "twitter",
    text: "twitter",
    href: "https://twitter.com/neptunemutual",
    isExternal: true,
  },
  {
    icon: "reddit",
    text: "reddit",
    href: "https://www.reddit.com/r/NeptuneMutual/",
    isExternal: true,
  },
  {
    icon: "telegram",
    text: "telegram",
    href: "https://t.me/neptunemutual",
    isExternal: true,
  },
  {
    icon: "github",
    text: "github",
    href: "https://github.com/neptune-mutual-blue",
    isExternal: true,
  },
  {
    icon: "linkedin",
    text: "linkedin",
    href: "https://www.linkedin.com/company/neptune-mutual",
    isExternal: true,
  },
  {
    icon: "youtube",
    text: "youtube",
    href: "https://www.youtube.com/c/NeptuneMutual",
    isExternal: true,
  },
  {
    icon: "discord",
    text: "discord",
    href: "https://discord.com/invite/2qMGTtJtnW",
    isExternal: true,
  },
];

const getFooterData = async (): Promise<FooterData> => {
  const lists: NavLinkList[] = [
    {
      title: "Resources",
      links: [
        {
          href: "https://neptunemutual.com/marketplace/",
          text: "Marketplace",
          badge: "New!",
          badgeColor: "success",
        },
        {
          href: "https://community.neptunemutual.com/",
          text: "Community Forums",
          isExternal: true,
        },
        {
          href: "https://neptunemutual.com/ecosystem/",
          text: "Ecosystem",
        },
        {
          href: "https://neptunemutual.com/docs/",
          text: "Documentation",
        },
        {
          href: "https://neptunemutual.com/web3-tools/",
          text: "Web3 Tools",
        },
        {
          href: "https://nft.neptunemutual.com/",
          text: "NFT Portal",
        },
        {
          href: "https://explorer.neptunemutual.net/",
          text: "Explorer",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          href: "https://neptunemutual.com/about/",
          text: "About us",
        },
        {
          href: "https://neptunemutual.com/blog/",
          text: "Blog",
        },
        {
          href: "https://neptunemutual.com/pressroom/",
          text: "Press Room",
        },
        {
          href: "https://neptunemutual.com/grants-and-bounties/",
          text: "Grants and Bounties",
        },
        {
          href: "https://neptunemutual.com/careers/",
          text: "Careers",
          badge: "We're Hiring!",
        },
        {
          href: "https://neptunemutual.com/security/",
          text: "Security",
        },
        {
          href: "https://neptunemutual.com/contact/",
          text: "Contact",
        },
      ],
    },
  ];

  return {
    lists,
    socials,
  };
};

export { getFooterData };
