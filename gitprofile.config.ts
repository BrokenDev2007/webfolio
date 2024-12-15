// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'brokendev2007', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Open Sourced',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['brokendev2007/Suzume', 'brokendev2007/social-tree', 'brokendev2007/firebase-react-drive'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects/Startups',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // more can be copy pasted over here
        {
          title: 'research.chirag.cloud',
          description:
            'A cloud based STEM project repository keeping your own scientific publishments and research articles. Interested users can either read the blogs or post their own and share with each other for knowledge enhancement.',
          imageUrl:
            'https://raw.githubusercontent.com/BrokenDev2007/research/refs/heads/main/resources/logo.png',
          link: 'https://research.chirag.cloud',
        },
        {
          title: 'Chirag Cloud LLC.',
          description:
            'A "Licensed Backend Cloud Infrastructure Provider". Providing backend and server infrastructures to new startups at a very minimum price.',
          imageUrl:
            'https://raw.githubusercontent.com/BrokenDev2007/research/refs/heads/main/resources/logo.png',
          link: 'https://buy.chirag.cloud',
        },
      ],
    },
  },
  seo: {
    title: 'Chirag Roy',
    description: 'Hello, I am a cloud based machine developer making applications and operating virtual computers in operating systems such as Linux, Debian and Ubuntu. Chirag.cloud is a all in one summary portfolio website of my development journey so far!',
    imageURL: 'https://cdn.discordapp.com/attachments/942235058960474112/1241243827059036160/BrokenDevLogo.png?ex=66497de5&is=66482c65&hm=64842c8021d6c8475d98957d748ab655478a1c473a936d3ba223ad92bb4e3c09&',
  },
  social: {
    researchGate: '',
    facebook: '',
    instagram: 'chiragroy2006',
    reddit: '',
    threads: '',
    youtube: 'chirag_was_here', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'brokendev2007',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.chirag.cloud',
    phone: '',
    email: 'me@chirag.cloud',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
  ],
  certifications: [
    {
      name: 'Young Publisher Award',
      body: 'Contributed a Biology Research Article.',
      year: 'Februrary 2024',
    },
    {
      name: 'Jr. Web Cloud Engineer',
      body: 'Remote Workshop Program @ Google-Cloud',
      year: 'December 2023',
    },
  ],
  educations: [
   
    {
      institution: 'Foundation Academy IITP',
      degree: 'High School Graduate',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'New York Academy Of Sciences',
      degree: 'The Junior Academy',
      from: '2023',
      to: '2025',
    },
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'brokendev2007', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `All Systems Operational ✅`,

  enablePWA: true,
};

export default CONFIG;
