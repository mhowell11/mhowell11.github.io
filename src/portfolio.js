/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Megan Howell",
  title: "Hello! My name is Megan Howell",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "tinyurl.com/megan-h-cv",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mhowell11",
  linkedin: "https://www.linkedin.com/in/megan-howell-cybersecurity",
  gmail: "meganghowell@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a cybersecurity student who aims to learn about all aspects of the field. I also have web development experience in HTML/CSS/Javascript, jQuery, node, React, and Next.js",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "code-branch"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Paradise Valley High School",
      logo: require("./assets/images/pv-logo.jpeg"),
      subHeader: "High School Diploma - Center for Research in Engineering, Science, and Technology - Computer Science track",
      duration: "August 2018 - May 2022",
      desc: "Member of the Center for Research in Engineering, Science, and Technology in the Computer Science track. Participated in research and completed a 200-hour cybersecurity internship.",
      descBullets: [
        "All Honors and AP Math, Science, and English",
        "Member of National Honor Society, Computer Science Honor Society, SkillsUSA, Society of Women Scholars, Paradise Valley Women & Information Technology, CyberPatriot, Computer Science Club, String Orchestra, and PVHS Orchestra Council"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Security Awareness", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Software Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Github/Git",
      progressPercentage: "80%"
    },
    {
      Stack: "Front-End Web Development (HTML/CSS)",
      progressPercentage: "75%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "75%"
    },
    {
      Stack: "Cybersecurity Policy/HIPAA/FERPA requirements",
      progressPercentage: "75%"
    },
    {
      Stack: "Raspberry Pi/Debian",
      progressPercentage: "70%"
    },
    {
      Stack: "Ubuntu",
      progressPercentage: "65%"
    },
    {
      Stack: "Python",
      progressPercentage: "65%"
    },
    {
      Stack: "Kali Linux",
      progressPercentage: "60%"
    },
    {
      Stack: "Command Line",
      progressPercentage: "60%"
    },
    {
      Stack: "Computer Networking",
      progressPercentage: "60%"
    },
    {
      Stack: "Service Now",
      progressPercentage: "45%"
    },
    {
      Stack: "Ruby/Rails",
      progressPercentage: "40%"
    },
    {
      Stack: "Penetration Testing",
      progressPercentage: "35%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cybersecurity Intern",
      company: "Paradise Valley Unified School District",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2021 – Present",
      desc:
        "Under Construction",
    },
    {
      role: "Cybersecurity Intern",
      company: "Arizona State University",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "August 2020 – April 2021",
      desc:
        "Under Construction"
    },
    {
      role: "WIT Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2019 – Present",
      desc:
        "Under Construction"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Under Construction",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "COVID-19 Dashboard",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tinyurl.com/covid19-zipcode-decoder/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "LoLaConnect",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://github.com/mhowell1/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !(Under Construction :D)",

  achievementsCards: [
    {
      title: "National Cyber Scholar",
      subtitle:
        "Under Construction",
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
      title: "Under Construction",
      subtitle:
        "",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "",
          url:
            ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Under Construction.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅 - under construction"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Do you have an opportunity for a rising cybersecurity star or a question? Please contact me.",
  number: "+1-602-317-4535",
  email_address: "meganghowell@gmail.com"
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
