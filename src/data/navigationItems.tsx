const navigationItems = [
  {
    tag: "Home",
    href: "/",
  },
  {
    tag: "Projects",
    href: "/projects",
  },
  {
    tag: "Blog",
    href: "/blog",
  },
  {
    tag: "About",
    href: "/about",
  },
];

const footerNavigationItems = [
  ...navigationItems,
  {
    tag: "Guestbook",
    href: "/guestbook",
  },
];

export { navigationItems, footerNavigationItems };
