const INSTAGRAM = "https://www.instagram.com/nandhakumar.io/";
const TWITTER = "https://twitter.com/nandhakumar_io";
const GITHUB = "https://github.com/nandhakumar-rs";
const LINKEDIN = "https://www.linkedin.com/in/nandhakumar-io/";
const EMAIL = "mailto:contact@nandhakumar.io";

const CONSTANT = {
  LINKS: {
    INSTAGRAM,
    TWITTER,
    GITHUB,
    LINKEDIN,
    EMAIL,
  },

  ROUTES: [
    {
      label: "Notes",
      href: "/",
    },
    {
      label: "Experiments",
      href: "/experiments",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  SOCIAL_LINKS: [
    {
      icon: "instagram",
      url: INSTAGRAM,
    },
    {
      icon: "twitter",
      url: TWITTER,
    },
    {
      icon: "linkedin",
      url: LINKEDIN,
    },
    {
      icon: "github",
      url: GITHUB,
    },
  ],

  FAQ_CONTENT:[
    {
      id:'1',
      heading: 'What Technologies I Use?',
      content: 'React, Angular, Next.js, Express.js, Nest.js, MongoDB, PostgresSQL, React Native, Ionic', 
    },
    {
      id:'2',
      heading: 'What tools I Use?',
      content: 'VS Code, XCode, Figma, Photoshop', 
    }
  ]
};

export default CONSTANT;
