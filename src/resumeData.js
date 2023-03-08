let resumeData = {
  imagebaseurl: "https://rbhatia46.github.io/",
  name: "Edison Leung | Software Developer",
  linkedinId: "Your LinkedIn Id",
  roleDescription:
    "Computer Science major at the University of Washington. I love exploring and creating new technologies. I'm always trying to find something funny in any situation.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/edleung03/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/EdisonLeung/",
      className: "fa fa-github",
    },
    {
      name: "resume",
      url: "https://drive.google.com/file/d/1qwD42YlEOCNcUD_RuuOGs7OXyMwjLYPe/view?usp=sharing",
      className: "fa fa-file",
    },
  ],
  aboutme:
    "Experienced in programming with various programming languages. Hands on experience with IOS and Android mobile app development. Seeking opportunities to pursue my passion in computer science and explore its applications",
  email: "edleung03@gmail.com",
  number: "+1(206)681-7124",
  education: [
    {
      UniversityName: "B.S. of Computer Science @ University of Washington",
      date: "Expected Graduation: 12/2024",
      info: [
        "Pursuing B.S. in Computer Science from Paul G. Allen Center for Computer Science and Engineering",
        "Major GPA: 3.87",
      ],
      courses: [
        {
          name: "Software Design and Implementation",
          link: "https://courses.cs.washington.edu/courses/cse331/",
        },
        {
          name: "Hardware Software Interface",
          link: "https://courses.cs.washington.edu/courses/cse351/",
        },
        {
          name: "Systems and Software Tools",
          link: "https://courses.cs.washington.edu/courses/cse391/",
        },
        {
          name: "Foundations of Computing",
          link: "https://courses.cs.washington.edu/courses/cse311/",
        },
        {
          name: "Data Structures and Parallelism",
          link: "https://courses.cs.washington.edu/courses/cse332/",
        },
        {
          name: "Data Management",
          link: "https://courses.cs.washington.edu/courses/cse344",
        },
        {
          name: "Systems Programming and Operating Systems",
          link: "https://courses.cs.washington.edu/courses/cse333/",
        },
        { name: "Calculus Series and Linear Algebra", link: "" },
      ],
      clubs: [
        { name: "Advanced Robotics (ARUW)", link: "https://aruw.org/" },
        { name: "Computing Community University of Washington", link: "https://com2.cs.washington.edu/" },
        { name: "Asian American InterVarsity (AAIV)", link: "http://aaivuw.com/" },
      ],
    },
  ],
  work: [
    {
      CompanyName: "CSE Course TA @ University of Washington",
      logo: "images/PaulAllenLogo.png",
      date: "09/2022 - Current",
      Achievements: [
        "Computer Science Course TA for Software Design and Implementation and Systems and Software Tools courses",
        "Improved grading efficiency by writing auto-graders in python to quickly and accurately grade student’s code submissions and automatically upload scores to UW’s Learning Management Systems",
        "Held office hours and led additional optional lecture sessions to help students better understand lecture material",
      ],
    },
    {
      CompanyName: "Software Engineer @ Solala",
      date: "06/2022 - 09/2022",
      logo: "images/Solala.jpg",
      Achievements: [
        "Full-Stack developer for website, IOS, and Android mobile app. Used expo for easy mobile app integration",
        "Worked on client-server development and created database responsible for storing and retrieving user information using firebase",
        "Used React Native and JavaScript for common UI and code reuse between web, IOS, and Android platforms",
        "Programmed UI components such as a task manager, calendar, reminders tab, and navigation manager",
        "Designed and created user friendly interface using CSS and React Native components",
        "Optimized sorting algorithm to organize user data efficiently",
      ],
    },
    {
      CompanyName: "Coding Instructor @ ID Tech",
      date: "03/2021-08/2022",
      logo: "images/IDTech.jpg",
      Achievements: [
        "Taught object-oriented design and how to apply it in Java and C#",
        "Taught game design principles through 3D game creation using Unity and API usage and integration through Minecraft modding",
        "Developed game components for client-server interface",
        "Programmed using Lua to develop and publish online games on Roblox",
        "Developed and improved programming curriculum to better focus on understanding why code works rather than how it works",
      ],
    },
  ],
  skillsDescription: "",
  technologies: [
    {
      skillname: "React/React Native",
    },
    {
      skillname: "Tailwind",
    },
    {
      skillname: "Firebase",
    },
    {
      skillname: "AWS Services",
    },
    {
      skillname: "PostgreSQL",
    },
    {
      skillname: "Git",
    },
    {
      skillname: "Node.js",
    },
    {
      skillname: "Linux",
    },
    {
      skillname: "Spark Framework",
    },
    {
      skillname: "Heroku",
    },
    {
      skillname: "Google API",
    },
    {
      skillname: "OpenCV"
    }
  ],
  skills: [
    {
      skillname: "Java",
    },
    {
      skillname: "JavaScript",
    },
    {
      skillname: "HTML5/CSS",
    },
    {
      skillname: "Python",
    },
    {
      skillname: "C/C++",
    },
    {
      skillname: "C#",
    },
    {
      skillname: "SQL",
    },
    {
      skillname: "TypeScript",
    },
    {
      skillname: "Mobile App and Client-Server Development",
    },
    {
      skillname: "Database Management",
    },
    {
      skillname: "Object Oriented Design",
    },
    {
      skillname: "Full-Stack Development",
    },
    {
      skillname: "Computer Vision"
    }
  ],
  portfolio: [
    {
      name: "ArUco Marker Tracking @ Advanced Robotics at UW",
      description: [
        "Create custom ArUco markers and implmented marker detection program using OpenCV to allow robot to identify its exact location on the field. Wrote matrix transposition algorithm to convert camera data to usuable robot positional data.",
        "With this positional data, the robots would then be able to build a SLAM map of the field and determine the best path to get to a certain location."
      ],
      imgurl: "images/portfolio/ArucoMarker.jpg",
      skills: [
        "OpenCV",
        "python",
        "AI Vision Tracking",
        "SLAM Mapping",
        "Vision Accuracy Testing"
      ],
      link: ""
    },
    {
      name: "UW Campus Map",
      description: [
        "A web application for finding the shortest path from one building to another at the University of Washington. This applicaiton allows for the inclusion of lesser known campus paths that are not included in typical GPS applicaitons. This was part of a course project for CSE 331 (Software Design and Implementation) at the University of Washington",
      ],
      imgurl: "images/portfolio/CampusMap.jpg",
      skills: [
        "React",
        "Typescript",
        "Node.js",
        "Spark Framework",
        "Google API",
        "JUnit Testing",
        "Java",
      ],
      link: "https://main.d3uqk9wtm98zyo.amplifyapp.com/CampusMap",
      gitLink: "https://github.com/EdisonLeung/Campus-Map",
      textLinks: [
        {
          link: "https://main.d3uqk9wtm98zyo.amplifyapp.com/CampusMap",
          text: "View Project",
        },
      ],
    },
    {
      name: "Imagetagger for Advanced Robotics at UW",
      description: [
        "An Image Annotation Application to effectively process over 30k+ images to feed into Machine Learning Model used to identify different types of robots. This was a project during my time in Advanced Robotics at the University of Washington.",
        "",
        "This application provides a user friendly interface that allows people to annotate images and upload them to a machine learning model. The backend was developed using PostgreSQL and Prisma API while the frontend uses React, Tailwind, and Next.js "
        
      ],
      imgurl: "images/portfolio/Imagetagger.jpg",
      skills: ["React", "Tailwind", "PostgreSQL", "Prisma", "Git", "Next.js"],
      link: "",
      textLinks: [],
    },
    {
      name: "Robotics @ Cedar Park",
      description: [
        "Designed a robot’s functions per FIRST Robotics Competition’s (FRC) yearly performance and budget requirements, working closely with mentors from Boeing and Microsoft",
        "From 2020-2021 I was the software lead for the shooting division which was responsible for determining the ideal trajectory to hit a target given distance data.",
        "In order to determine the ideal trajectory, we used a cubic spline interpolation algorithm. This would take a distance (given by a Limelight) and interpolate the from a dataset of ideal trajectory data points to find the best trajetory for that distance.",
        "Some of my other responsibilities included: Programming essential motor functions, Building a SLAM Map to enable robot to know location on field, Using SLAM Map to develop an algorithm to assist robot driver to properly align robot with targets, and Managing Electrical and Software compatability",
        "From 2018-2019 years on the team, my contributions helped team qualify for the FRC Worlds Competition in Houston where we became semi-finalists and finalists in 2018 and 2019 repsectively",
      ],
      imgurl: "images/portfolio/CPR_Robot.jpg",
      skills: [
        "Java",
        "SLAM Mapping",
        "WPILIB",
        "Git",
        "Vision Tracking",
        "Cubic Interpolation",
        "Matlab",
        "Hardware Software Interface",
      ],
      link: "",
      textLinks: [
        { link: "https://www.cpr3663.com/", text: "Team Website" },
        //  {link: "", text: "View Project"}
      ],
    },
  ],
  noteworthy_projects: [
    {
      name: "CSE Student Chat App",
      description: "Created backend for chat application for Univeristy of Washington CSE Students to connect and chat. Course project for CSE 332 (Algorithms and Parallelism) at UW.",
      link: "",
      skills: ["Java", "Data Structures", "Networking", "JUnit Testing",]
    },
    {
      name: "Dynamic Memory Allocator",
      description:
        "Memory allocator that increases space utilization and decrease throughput using matrix transpose algorithms to optimize cache usage and reduce cache misses",
      gitLink: "https://github.com/EdisonLeung/Dynamic-Memory-Allocator",
      link: "https://github.com/EdisonLeung/Dynamic-Memory-Allocator",
      skills: ["C", "gdb", "blocking", "Memory Allocation"],
    },
    {
      name: "Group Calendar Website",
      description:
        "Calendar schedule visualization tool to organize the schedules of multiple people or groups. This web application allows users to create calendar groups where they and other people are able to synchronize all their schedules into one cohesive calendar.",
      skills: [
        "AWS Console, S3, Amplify, Cognito, IAM",
        "Graphql",
        "React",
        "Tailwind",
      ],
      link: "https://main.d3q58t64yxo8f4.amplifyapp.com/",
      gitLink: "https://github.com/EdisonLeung/group-calendar",
    },
  ],
};

export default resumeData;
