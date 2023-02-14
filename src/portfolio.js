/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Khadidja OUARAB",
  title: "Hi all, I'm Khadidja",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications  with JavaScript / Reactjs / Nodejs and some other libraries and frameworks. Administrator of Oracle Databases (RDBMS) for 14 years and developer of JEE applications for 6 years at the airline Air Algérie. Certified Oracle OCA and Microsoft MCP. Mentord +100 users on solutions that are provided by Accelya such as PRA, CRA, PRISM. My goal is to take new professional challenges and succeed in a stimulating environment that will allow me advancement opportunities. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LcWtI1TQx5YW2ZswEaLv4ebCeRdXDRe1/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KhadidjaOuarab",
  linkedin: "https://www.linkedin.com/in/khadidja-ouarab-a13054210",
  gmail: "ouarab.khadidja@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
 // medium: "https://medium.com/@davidrakosi",
 // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
//  instagram: 'https://www.instagram.com/davidrakosi/',
 // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Database Administrator "),
   /* emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )*/
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut National de Formation en Informatique (I.N.I), Algiers",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Information Systems Engineer",
      duration: "Recognized by WES as Bachelor's and master's degree",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Institute of Computer Engineering (3iL), Limoges, France",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Information System Designer (CSI)",
      duration: "Recognized by WES as Bachelor's degree (three years)",
   /*   desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer Full Stack JS React",
      company: " Air Algérie, Algiers",
      companylogo: require("./assets/images/Air_Algérie_Logo.svg.png"),
      date: "Octobre 2021 – Present",
      desc:
        "Developed a solution to manage ADM data https://ah-frontend.onrender.com/ using Figma, React JS, PrimeReact, NodeJS, Express, MongoDB, Mongoose, GIT, VS Code.",
      descBullets: [
       
      ]
    },
    {
      role: "Developer Full Stack Java EE ",
      company: " Air Algérie, Algiers",
      companylogo: require("./assets/images/LogoAH.png"),
      date: "January 2017 – to Present",
      desc:
        "Developed a multiple applications using : UML, Redhat 4.5 Linux, Oracle Database 10g R2, SQL/PLSQL, SQL Developer 1.5.4, Java 7, NetBeans IDE 8.0.2,  Primefaces 6.2, GlassFish Server 3.1.2.2, Ireport 5"
    },
    {
      role: "Oracle Database Administrator,",
      company: " Air Algérie, Algiers",
      companylogo: require("./assets/images/LogoAH.png"),
      date: "July 2008 – January 2017",
      desc:
        "Managed 3 Databases Servers Oracle DB 10g R2. Their size exceeds 800 GB which implements the Revenue Accounting Proration Interline processing Decision support RAPID solution which is provided by Accelya in order to allows Air Algérie to streamline their passenger revenue accounting processes and optimize revenue ;"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff and Administring Database, I love to teach others what I have learnt.",

  blogs: [
    {
     // url:
       // "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Business Applications Instructor, Revenue Accounting, Air Algérie, Algiers",
      description:
        "Mentored +100 users on business applications such as passenger revenue accounting (PRA), cargo revenue accounting (CRA), PRISM …"
    },
    {
     // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Oracle Database Instructor, IBN ROCHD School, Algiers.",
      description:
        "Mentored +100 users on Oracle Database (Workshop 1 and 2) "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
 // title: emoji("Podcast 🎙️"),
 // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(00 213) 557 937 702",
  email_address: "ouarab.khadidja@gmail.com"
};

// Twitter Section

const twitterDetails = {
 // userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
