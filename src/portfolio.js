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
        "A rising cybersecurity star interested in all aspects of InfoSec."
    ),
    resumeLink: "https://tinyurl.com/megan-h-cv",
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
            "⚡ Programming in JavaScript, Java, Python, Ruby, and HTML/CSS"
        ),
        emoji("⚡ Linux and Command Line Experience"),
        emoji(
            "⚡ Professional, Ethical, and Responsible Person"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
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

        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
        schoolName: "Paradise Valley High School",
        logo: require("./assets/images/pv-logo.jpeg"),
        subHeader: "High School Diploma - Center for Research in Engineering, Science, and Technology - Computer Science track",
        duration: "August 2018 - May 2022",
        desc: "Member of the Center for Research in Engineering, Science, and Technology in the Computer Science track. Participated in research and completed a 200-hour cybersecurity internship.",
        descBullets: [
            "All Honors and AP Math, Science, and English",
            "Member of National Honor Society, Computer Science Honor Society, SkillsUSA, Society of Women Scholars, Paradise Valley Women & Information Technology, CyberPatriot, Computer Science Club, String Orchestra, and PVHS Orchestra Council"
        ]
    }]
};

// Your top proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
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
            Stack: "Virtualization",
            progressPercentage: "65%"
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
            Stack: "Parrot OS",
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
    experience: [{
            role: "Cybersecurity Intern",
            company: "Paradise Valley Unified School District",
            companylogo: require("./assets/images/pvschools.jpeg"),
            date: "April 2021 – Present",
            desc: "Working on a variety of Security projects including switch management, computer imaging, pen-testing, and preparing for the CompTIA S+ certification.",
        },
        {
            role: "Cybersecurity Intern",
            company: "Arizona State University",
            companylogo: require("./assets/images/asu.png"),
            date: "August 2020 – April 2021",
            desc: "Worked with the Security team on transferring the software review process to Service Now and learned about all aspects of cybersecurity, especially cybersecurity policy and compliance."
        },
        {
            role: "WIT Intern",
            company: "Paradise Valley Women & Information Technology",
            companylogo: require("./assets/images/wit.png"),
            date: "June 2019 – Present",
            desc: "Under Construction"
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "Under Construction",
    projects: [{
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "COVID-19 Dashboard",
            projectDesc: "Due to the rapid spread of COVID-19, there are not many places on the internet with all the information for residents residing in specific zip codes. Therefore, to solve this problem, we created a website that has several sources of information for residents in various states across the United States of America. The information includes the number of COVID-19 cases in different zip codes and cities, the operation status for restaurants (open or closed), and the Twitters of state governors and city mayors. This information helps citizens to make more informed decisions on current, reliable COVID information and best respond to the COVID-19 pandemic through safety practices and procedures such as social distancing, isolation, and quarantine.",
            footerLink: [{
                    name: "Visit the Website",
                    url: "https://tinyurl.com/covid19-zipcode-decoder/",
                    name: "Blog Post",
                    url: "https://www.litas4girls.org/litas-team-builds-app-to-track-covid-19-1"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "LoLaConnect",
            projectDesc: "LoLaConnect is an app to help Low Latency node users find one another. These nodes allow users to have very low latency video/audio calls, allowing musicians across states to play music with one another. However, for LoLa Nodes to become widely used, the bandwidth infrastructure needs to improve. This project was taken on as a Smart Cities engagement project to motivate industry and government leaders in Arizona to invest in better bandwidth to run devices like these.",
            footerLink: [{
                name: "Visit the GitHub repository",
                url: "https://github.com/troya2/symphony"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "My top achievements and certifications - see my CV for more!",
    achievementsCards: [{
            title: "National Cyber Scholar",
            subtitle: "One of the top 570 competitors in a 48-hour CTF competition. I was granted access to the SANS Cyber Foundations Academy and a college scholarship for my achievement.",
            image: require("./assets/images/NCS_Scholar_Badge.jpeg"),
            footerLink: [{
                    name: "Badge Link",
                    url: "https://badgr.com/public/assertions/Je88KkaHS72fpqbguKpRAw"
                },
                {
                    name: "About the Competition",
                    url: "https://www.nationalcyberscholarship.org/high-school-scholarship-competition"
                }
            ]
        },
        {
            title: "2021 SkillsUSA Arizona Cybersecurity Winner",
            subtitle: "My team of two won the Arizona Cybersecurity competition for SkillsUSA and advanced to nationals.",
            image: require("./assets/images/SkillsUSA.jpeg"),
        },

        {
            title: "",
            subtitle: "",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                { name: "Certification", url: "" },
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
    subtitle: "Under Construction.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅 - under construction"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
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
    subtitle: "Do you have an opportunity for a rising cybersecurity star or a question? Please contact me.",
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