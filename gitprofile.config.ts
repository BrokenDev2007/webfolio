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
      display: false, // Display GitHub projects?
      header: 'My Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
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
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // more can be copy pasted over here
        {
          title: 'The Social Tree',
          description:
            'A place to connect people as well as all of their social media accounts.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/942235058960474112/1241255147812945950/FamilyTree_withoutbg.png?ex=66498870&is=664836f0&hm=7a59e043c402d88dd3fbc6beaf9615f1798c5aab1cad07ef047b34fd83826acf&',
          link: 'https://web.socialtree.site',
        },
      ],
    },
  },
  seo: {
    title: 'Broken Developer',
    description: 'You can view my portfolio here on this website.',
    imageURL: 'https://cdn.discordapp.com/attachments/942235058960474112/1241243827059036160/BrokenDevLogo.png?ex=66497de5&is=66482c65&hm=64842c8021d6c8475d98957d748ab655478a1c473a936d3ba223ad92bb4e3c09&',
  },
  social: {
    researchGate: '',
    facebook: '',
    instagram: 'chiragroy2006.dev',
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
    website: 'https://www.brokendev.tech',
    phone: '',
    email: 'brokendev2007@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vTdxuzGvox-IYTjTjNoT1RAYadoDxviniF2m8qAsZwzmC3QEOJYdqSYohap1WTqCJLCG5zXmO8PpR_2/pub', // Empty fileUrl will hide the `Download Resume` button.
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
    {
      company: 'Media Hancer',
      position: 'Full Stack Web Developer',
      from: 'Feb 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Freelancing',
      position: 'Freelancer',
      from: 'August 2022',
      to: 'January 2024',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Web Cloud Engineer',
      body: 'Remote Internship Program @ Google-Cloud',
      year: 'December 2023',
    },
  ],
  educations: [
    {
      institution: 'UpGrad Online',
      degree: 'BS in Computer Science',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Foundation Academy IITP',
      degree: 'High School Graduate',
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
  footer: `Made by Chirag Roy`,

  enablePWA: true,
};

export default CONFIG;
