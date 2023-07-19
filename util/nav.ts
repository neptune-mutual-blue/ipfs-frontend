const data: LinkNav[] = [
  {
    title: "Blog",
    href: "https://neptunemutual.com/blog/",
  },
  {
    title: "Careers",
    href: "https://neptunemutual.com/careers/",
  },
  {
    title: "About Us",
    href: "https://neptunemutual.com/about/",
  },
  {
    title: "Resources",
    children: [
      {
        type: "section",
        title: "Resources",
        links: [
          {
            title: "Explore Marketplace",
            href: "https://neptunemutual.com/marketplace/",
            text: "Explore the marketplace, purchase policies, and pool liquidity",
            icon: "bank",
          },
          {
            title: "Blog ",
            href: "https://neptunemutual.com/blog/",
            text: "Visit our blog",
            icon: "edit-03",
          },
          {
            title: "Press Room",
            href: "https://neptunemutual.com/pressroom/",
            text: "The source for news about Neptune Mutual",
            icon: "annotation-dots",
          },
          {
            title: "Ecosystem",
            href: "https://neptunemutual.com/ecosystem/",
            text: "Learn how you can participate in our marketplace",
            icon: "database-01",
          },
          {
            title: "Documentation",
            href: "https://neptunemutual.com/docs/",
            text: "Learn more about decentralized insurance and Neptune Mutual protocol",
            icon: "file-code-01",
          },
          {
            title: "Web3 Tools",
            href: "https://neptunemutual.com/web3-tools/",
            text: "Free and easy to use web3 online tools",
            icon: "tool-01",
          },
          {
            title: "NFT Portal",
            href: "https://nft.neptunemutual.com/",
            text: "Participate in our cover pools and mint NFTs for free.",
            icon: "clapperboard",
          },
        ],
      },
      {
        type: "section",
        title: "Company",
        links: [
          {
            title: "About Us",
            href: "https://neptunemutual.com/about/",
            text: "Learn about our story and our mission statement",
            icon: "flag-06",
          },
          {
            title: "Grants and Bounties",
            href: "https://neptunemutual.com/grants-and-bounties/",
            text: "Learn about our programs, promotions, grants, and bounties",
            icon: "stars-02",
          },
          {
            title: "Careers",
            href: "https://neptunemutual.com/careers/",
            text: "We’re always looking for talented people. Join our team!",
            icon: "users-01",
            badge: "We're Hiring!",
          },
          {
            title: "Security",
            href: "https://neptunemutual.com/security/",
            text: "View our platform audit reports. Learn about our bug bounty program.",
            icon: "glasses-02",
          },
          {
            title: "Policy",
            href: "https://neptunemutual.com/policies/",
            text: "View our disclaimer, terms of service, and privacy policy",
            icon: "folder",
          },
          {
            title: "Contact",
            href: "https://neptunemutual.com/contact/",
            text: "Reach out to us via email or our community channels",
            icon: "book-closed",
          },
        ],
      },
      {
        type: "videos-section",
        title: "From Our Youtube Channel",
        more: {
          title: "All Video Tutorials",
          href: "https://www.youtube.com/neptune-mutual",
        },
      },
    ],
  },
];

export { data };
