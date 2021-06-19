/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";


const greeting = {
    username: "Megan Howell",
    title: "Hello! My name is Megan Howell",
    subTitle: emoji(
        "Megan is a passionate rising computer scientist who is interested in programming, cybersecurity, and web development. Megan is in a rigorous computer science program at her high school where she has to take an advanced CS course every year and complete a 200-hour internship. She aspires to attend Grand Canyon University in Phoenix, Arizona to earn a Bachelor of Science in Cybersecurity."
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
    experience: [{
            role: "Bug Bounty Hunter",
            company: "HackerOne & BugCrowd",
            companylogo: require("./assets/images/virus.jpeg"),
            date: "May 2021 – Present",
            desc: "Freelance bug hunter for companies that partner with the bug bounty hunting companies HackerOne & BugCrowd"
        },
        {
            role: "Cybersecurity Intern",
            company: "Paradise Valley Unified School District",
            companylogo: require("./assets/images/pvschools.jpeg"),
            date: "April 2021 – Present",
            desc: "I am working with the PVSchools IT department on several cybersecurity initiatives including switch management, penetration testing, computer wiping, and other activities.",
        },
        {
            role: "Information Security Intern",
            company: "Arizona State University",
            companylogo: require("./assets/images/asu.png"),
            date: "August 2020 – April 2021",
            desc: "Worked with the Information Security Team at ASU on Cloud Access Server Brokering and migrating the Departmental Security Review process to Service Now."
        },
        {
            role: "Chief Operations Officer",
            company: "LoLaConnect",
            companylogo: require("./assets/images/lola.png"),
            date: "July 2019 – November 2019",
            desc: "LoLaConnect is a company committed to assisting cities become Smart Cities by providing a way for their citizens to connect virtually to play music together utilizing Low Latency technology by using a computer called a LoLa Node. The LoLaConnect team has developed a web application for users of LoLa Nodes to connect with each other so that they can play music together utilizing the LoLa Nodes in their communities."
        },

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
    subtitle: "Large coding projects that I have completed",
    projects: [{
            image: require("./assets/images/litas.png"),
            projectName: "COVID-19 Dashboard",
            projectDesc: "Due to the rapid spread of COVID-19, there are not many places on the internet with all the information for residents residing in specific zip codes. Therefore, to solve this problem, we created a website that has several sources of information for residents in various states across the United States of America. The information includes the number of COVID - 19 cases in different zip codes and cities, the operation status for restaurants (open or closed), and the Twitters of state governors and city mayors.This information helps citizens to make more informed decisions on current, reliable COVID information and best respond to the COVID - 19 pandemic through safety practices and procedures such as social distancing, isolation, and quarantine.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://tinyurl.com/covid19-zipcode-decoder/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/lola.png"),
            projectName: "LoLaConnect",
            projectDesc: "LoLaConnect is a company committed to assisting cities become Smart Cities by providing a way for their citizens to connect virtually to play music together utilizing Low Latency technology by using a computer called a LoLa Node. The LoLaConnect team has developed a web application for users of LoLa Nodes to connect with each other so that they can play music together utilizing the LoLa Nodes in their communities.",
            footerLink: [{
                name: "Visit Website",
                url: "http://github.com/mhowell1/"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Awards And Certifications 🏆 "),
    subtitle: "Megan's Awards and Certifications",

    achievementsCards: [{

            title: "ETA Information Technology Security Certification",
            subtitle: "Earned a vendor-neutral information security certification from the Electronic Technicians Association.",
            image: require("./assets/images/eta.png"),
            footerLink: [{
                name: "",
                url: ""
            }]
        },

        title: "National Cyber Scholar",
        subtitle: "One of 570 top scorers in the 2021 National Cyber Scholarship CTF that lasted 48 hours and covered web exploitation, binary exploitation, forensics, networing, and cryptography.",
        image: require, ("./assets/images/NCS.png"),
        footerLink: [{
            name: "Badge",
            url: "https://badgr.com/public/assertions/Je88KkaHS72fpqbguKpRAw"
        }],
        {
            title: "SkillsUSA Arizona Cybersecurity Winner",
            subtitle: "My team won the SkillsUSA Arizona Cybersecurity competition in 2021 and progressed to Nationals. The competition focuses on defensive measures taken to secure a network. SkillsUSA is a career and technical organization that emphasizes soft skills.",
            image: require("./assets/images/skills.jpeg"),
            footerLink: [{
                name: "",
                url: ""
            }]
        },

        {
            title: "NCWIT 2021 National Honorable Mention",
            subtitle: "I was one of the top 400 women who applied for the NCWIT Aspirations award out of over 4,000 applications.",
            image: require("./assets/images/ncwit.png"),
            footerLink: [{
                    name: "Press Release",
                    url: "https://www.aspirations.org/21HSrecipients"
                }

            ]
        },
        {
            title: "Microsoft Technology Associate (MTA) Certifications",
            subtitle: "MTA Certified in JavaScript, Python, Security, Java, HTML/CSS, Networking, and Mobility & Device Fundamentals",
            image: require("./assets/images/mta.jpeg"),
            footerLink: [{
                name: "Certification Information",
                url: "https://support.microsoft.com/en-us/topic/earn-a-microsoft-technology-associate-mta-certification-357215d0-31ce-0620-feba-1bb60165b770"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "CTF Writeups",
    subtitle: "My blogs detailing my experiences competing in different CTF competitions.",

    blogs: [{
            url: "https://cyberqueenmeg.blogspot.com/2021/06/national-cyber-scholarship-write-up.html",
            title: "National Cyber Scholarship ",
            description: "Write Up of my experience competing in the National Cyber Scholarship CTF and how I became a National Cyber Scholar."
        },
        {
            url: "https://cyberqueenmeg.blogspot.com/2021/06/grand-canyon-university-ctf-beta-test.html",
            title: "Grand Canyon University CTF Beta Test Write Up",
            description: "Read about my experience beta-testing GCU's new CTF"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "Talks",
    subtitle: emoji(
        "I frequently share my perspective at conferences with a worldwide audience."
    ),

    talks: [{
            title: "CybHer Conversations (2020)",
            subtitle: "I was on a panel for K-12 students about how to get involved with Cybersecurity. ",
            event_url: "https://www.youtube.com/watch?v=SHGZID3NEfw"
        }, {
            title: "Covid-19 Analysis & Response Presentation (2020)",
            subtitle: "Presented modeling and other research to school district leaders"
        }, {
            title: "Arizona State University Partner to Protect Arizona Unconference Student Panelist (2020)",
            subtitle: "Student Panelist on a panel about the future of Cyber Security"
        }, {
            title: "State of the Smart Region Summit Speaker (2019)",
            subtitle: "Presented with the LoLaConnect team about our product and how it will benefit the Smart Cities Community"
        }, {
            title: "Arizona CIO/CTO Forum (2017, 2019, 2020)",
            subtitle: "Presenter on my Girls Who Code project, AI in K-12, and CyberPatriot"
        }


    ],
    display: true // Set false to hide this section, defaults to true
};

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "N/A - maybe one day",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me"),
    subtitle: "Do you have an opportunity for a rising cybersecurity star or a question for me? Please email me.",
    email_address: "meganghowell@gmail.com"
};

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};


export {
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