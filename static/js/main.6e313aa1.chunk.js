(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),o=t.n(r),l=(t(20),t(1)),s=t.n(l);function c(e){var a=e.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#current",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#education"},"Education")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Experience")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement(s.a,{animateIn:"animate__zoomIn",animateOnce:!0,duration:2},i.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",a.name,"."),i.a.createElement("h3",null,a.roleDescription)),i.a.createElement("hr",null),i.a.createElement(s.a,{animateIn:"animate__fadeInLeft",animateOnce:!0,duration:2},i.a.createElement("ul",{className:"social"},a.socialLinks&&a.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:e.className}),i.a.createElement("h6",null,e.name)))}))))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}var m=function(e){var a=e.resumeData;return i.a.createElement("div",{id:"sidenav"},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!0,duration:2},i.a.createElement("ul",null,a.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.name},i.a.createElement("i",{className:e.className})))}))))},u=t(3),d=t(4),p=t(6),g=t(5),h=t(7),f=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!1,duration:.5},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!1,duration:.5},i.a.createElement("h2",null,"Programming Languages: "),i.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e,a){return i.a.createElement("li",{key:a}," ",e.skillname," ")}))),i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!1,duration:.5},i.a.createElement("h2",null,"Softwares / Technologies: "),i.a.createElement("ul",{className:"skills"},e.technologies&&e.technologies.map(function(e,a){return i.a.createElement("li",{key:a}," ",e.skillname," ")})))))))}}]),a}(n.Component),E=t(2);t(9);function k(e){var a=e.resumeData,t=Object(n.useState)(a.work[0]),r=Object(E.a)(t,2),o=r[0],l=r[1],c=Object(n.useState)(""),m=Object(E.a)(c,2),u=m[0],d=m[1],p=function(){""===u&&(d("animated animate__zoomIn"),setTimeout(function(){d("")},750))};return i.a.createElement("section",{id:"resume"},i.a.createElement("h1",{className:"row"},i.a.createElement("span",{className:"title"},"Work Experience")),i.a.createElement("div",{className:"row resume-container",style:{backgroundImage:window.innerWidth<767?"url(".concat(o.logo,")"):"",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!0,duration:.5},i.a.createElement("div",{className:"work-section",style:{flexWrap:window.innerWidth<767?"wrap":"nowrap"}},window.innerWidth<767?i.a.createElement("select",{className:"mobile-select",onChange:function(e){l(JSON.parse(e.target.value)),p()}},a.work.map(function(e,a){return i.a.createElement("option",{key:a,value:JSON.stringify(e),className:"smoothscroll",style:{borderLeft:"4px solid ".concat(e.CompanyName===o.CompanyName?"#64ffda":"")}},e.role)})):i.a.createElement("div",{className:"select"},i.a.createElement("ul",null,a.work.map(function(e,a){return i.a.createElement("li",{key:a,className:"smoothscroll",style:{borderLeft:"4px solid ".concat(e.CompanyName===o.CompanyName?"#64ffda":"")}},i.a.createElement("button",{key:e.CompanyName,onClick:function(){l(e),p()}},e.role))}))),i.a.createElement("div",{className:"description ".concat(u)},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!1,duration:1},i.a.createElement("div",{className:"title"},o.role," @ ",o.CompanyName,window.innerWidth>720&&i.a.createElement("img",{src:o.logo,alt:"",style:{position:"absolute",paddingRight:"4rem",right:0,width:"auto",height:"5.5rem"}})),i.a.createElement("div",null,o.date),i.a.createElement("ul",null,a.work.filter(function(e){return e.CompanyName===o.CompanyName})[0].Achievements.map(function(e,a){return i.a.createElement("li",{key:a},e)}))))))))}function v(e){var a=e.index,t=e.item,r=Object(n.useState)(!1),o=Object(E.a)(r,2),l=o[0],c=o[1],m=Object(n.useState)(0),u=Object(E.a)(m,2),d=u[0],p=u[1],g=Object(n.useRef)(null);return Object(n.useEffect)(function(){p(g.current.clientHeight)}),i.a.createElement("div",{className:"projects-grid"},i.a.createElement("div",{className:"project-content"},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!0,style:{position:"relative",zIndex:2},className:"mobile-glass"},i.a.createElement("p",{className:"project-overline"},"Featured Project"),i.a.createElement("h3",{className:"project-title"},t.name),i.a.createElement("div",{className:"description glass"},i.a.createElement("div",{className:"project-description",ref:g,style:{maxHeight:l?"100rem":"23rem"}},i.a.createElement(s.a,{animateIn:a%2===0?"animate__fadeInLeft":"animate__fadeInRight",animateOnce:!0,delay:250,duration:.5},t.description.map(function(e,a){return i.a.createElement("p",{key:a},e)}))),d>=230&&i.a.createElement("div",{className:"read-more",onClick:function(){return c(!l)}},i.a.createElement("button",null,l?"read less":"read more"))),i.a.createElement("ul",{className:"project-tech-list glass"},t.skills.map(function(e,a){return i.a.createElement("li",{key:a},e)})),i.a.createElement("div",{className:"project-links"},t.gitLink&&i.a.createElement("a",{href:t.gitLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fa fa-github"})),t.textLinks&&t.textLinks.map(function(e,a){return i.a.createElement("a",{key:a,href:e.link},i.a.createElement("div",{style:{fontSize:15}},e.text," \xa0"),i.a.createElement("i",{className:"fa-solid fa-arrow-up-right-from-square"}))})))),i.a.createElement("div",{className:"project-image portfolio-item"},i.a.createElement("div",{className:"gatsby-image-wrapper gatsby-image-wrapper-constrained img"},i.a.createElement("div",{style:{display:"block"}},i.a.createElement("a",{href:t.link},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("img",{src:t.imgurl,alt:""}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,t.name),i.a.createElement("p",null,"View Project")))))))))}function y(e){var a=e.item;return i.a.createElement("a",{href:a.gitLink,title:"View Project",target:"_blank",rel:"noopener noreferrer",className:"project-inner glass"},i.a.createElement(s.a,{animateIn:"animate__fadeInLeft",animateOnce:!1},i.a.createElement("li",null,i.a.createElement("div",{style:{display:"block"}},i.a.createElement("div",{className:"project-top"},i.a.createElement("div",{className:"folder"},i.a.createElement("i",{className:"fa-regular fa-folder"})),a.gitLink&&i.a.createElement("div",{className:"project-links"},i.a.createElement("i",{className:"fa fa-github"}))),i.a.createElement("h3",{className:"project-title"},a.name),i.a.createElement("div",{className:"project-description"},i.a.createElement("p",null,a.description))),i.a.createElement("div",null,i.a.createElement("ul",{className:"project-tech-list"},a.skills.map(function(e,a){return i.a.createElement("li",{key:a},e)}))))))}var b=function(e){var a=e.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,i.a.createElement("span",{className:"title"},"Some of My Projects")),i.a.createElement("ul",null,a.portfolio&&a.portfolio.map(function(e,a){return i.a.createElement(v,{item:e,index:a,key:a})})),i.a.createElement("h1",{style:{marginTop:"10%",textAlign:"center"}},"Other Noteworthy Projects"),i.a.createElement("ul",{className:"gg"},a.noteworthy_projects.map(function(e,a){return i.a.createElement(y,{item:e,key:a})})))))},w=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component);function N(e){var a=e.resumeData;return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"contact-form"},i.a.createElement(s.a,{animateIn:"animate__fadeInLeft",animateOnce:!1,duration:.5},i.a.createElement("h1",null,"Please Feel Free to Contact Me @"," ",i.a.createElement("a",{style:{color:"#57cbff"},href:"mailto:edisonleung03@gmail.com?"},a.email)," ","or +1(206)681-7124")))))}var S={name:"Edison Leung | Software Developer",linkedinId:"Your LinkedIn Id",roleDescription:"Computer Science major at the University of Washington. I love exploring and creating new technologies.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/edleung03/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/EdisonLeung/",className:"fa fa-github"},{name:"resume",url:"https://drive.google.com/file/d/1qwD42YlEOCNcUD_RuuOGs7OXyMwjLYPe/view?usp=sharing",className:"fa fa-file"}],aboutme:"Experienced in programming with various programming languages. Hands on experience with IOS and Android mobile app development. Seeking opportunities to pursue my passion in computer science and explore its applications",email:"edisonleung03@gmail.com",number:"+1(206)681-7124",education:[{UniversityName:"B.S. of Computer Science @ The University of Washington",date:"Expected Graduation: 12/2024",info:["Pursuing B.S. in Computer Science from Paul G. Allen Center for Computer Science and Engineering","Major GPA: 3.87"],courses:[{name:"Software Design and Implementation",link:"https://courses.cs.washington.edu/courses/cse331/"},{name:"Hardware Software Interface",link:"https://courses.cs.washington.edu/courses/cse351/"},{name:"Operating Systems and Systems Programming",link:"http://courses.cs.washington.edu/courses/cse333/"},{name:"Systems and Software Tools",link:"https://courses.cs.washington.edu/courses/cse391/"},{name:"Foundations of Computing",link:"https://courses.cs.washington.edu/courses/cse311/"},{name:"Data Structures and Parallelism",link:"https://courses.cs.washington.edu/courses/cse332/"},{name:"Algorithms",link:"http://courses.cs.washington.edu/courses/cse421/"},{name:"Machine Learning",link:"http://courses.cs.washington.edu/courses/cse446/"},{name:"Data Management",link:"https://courses.cs.washington.edu/courses/cse344"},{name:"Systems Programming and Operating Systems",link:"https://courses.cs.washington.edu/courses/cse333/"},{name:"Calculus Series and Linear Algebra",link:""}],clubs:[{name:"Advanced Robotics (ARUW)",link:"https://aruw.org/"},{name:"Computing Community University of Washington",link:"https://com2.cs.washington.edu/"},{name:"Asian American InterVarsity (AAIV)",link:"http://aaivuw.com/"}]}],work:[{CompanyName:"University of Washington - Department of Radiology",role:"Full Stack Engineer",logo:"images/UW_Radiology.jpg",date:"05/2022 - Current",Achievements:["Created medical training website using NextJS and React for front-end and Firestore for the database","Created Database Schema and developed security rules using Firestore to optimize data usage and protect user information","Programmed interactive web simulations using TypeScript and React to allow users to simulate real-world medical situations","Programmed functions using Node.js to perform automated task such as routine database backups and sending automated emails"]},{CompanyName:"Molecular Information Systems Lab",role:"Machine Learning Research Assistant",logo:"images/misl-logo.svg",date:"03/2023 - Current",Achievements:["Collaborated with scientists and researchers from Microsoft Research and UW to explore the intersections and application of information technology in molecular biology","Used PyTorch Geometric Model to develop a machine-learning model that could recognize different DNA Kmer strands use pattern recognition to predict their barcode features from DNA"]},{CompanyName:"University of Washington",role:"CSE Course TA",logo:"images/PaulAllenLogo.png",date:"09/2022 - Current",Achievements:["Computer Science Course TA for Software Design and Implementation and Systems and Software Tools courses","Improved grading efficiency by writing auto-graders in python to quickly and accurately grade student\u2019s code submissions and automatically upload scores to UW\u2019s Learning Management Systems","Held office hours and led additional optional lecture sessions to help students better understand lecture material"]},{CompanyName:"Advanced Robotics at the University of Washington",role:"Computer Vision Software Engineer",date:"09/2022 - Current",logo:"images/ARUW.png",Achievements:["Collaborated with a 60-person team to implement computer vision software in Python, which allows robots to accurately aim at opponents during the DJI RoboMaster competition","Developed code using OpenCV so that our autonomous robot could recognize ArUco Markers on the field to determine its exact 3D position","Wrote unit tests to ensure code quality and reliability"]},{CompanyName:"Solala",role:"Software Engineer",date:"06/2022 - 09/2022",logo:"images/Solala.jpg",Achievements:["Full-Stack developer for website, IOS, and Android mobile app. Used expo for easy mobile app integration","Worked on client-server development and created database responsible for storing and retrieving user information using firebase","Used React Native and JavaScript for common UI and code reuse between web, IOS, and Android platforms","Programmed UI components such as a task manager, calendar, reminders tab, and navigation manager","Designed and created user friendly interface using CSS and React Native components","Optimized sorting algorithm to organize user data efficiently"]},{CompanyName:"ID Tech",role:"Coding Instructor",date:"03/2021-08/2022",logo:"images/IDTech.jpg",Achievements:["Taught object-oriented design and how to apply it in Java and C#","Taught game design principles through 3D game creation using Unity and API usage and integration through Minecraft modding","Developed game components for client-server interface","Programmed using Lua to develop and publish online games on Roblox","Developed and improved programming curriculum to better focus on understanding why code works rather than how it works"]}],skillsDescription:"",technologies:[{skillname:"React/React Native"},{skillname:"Tailwind"},{skillname:"Firebase"},{skillname:"Firestore"},{skillname:"Azure"},{skillname:"AWS Services"},{skillname:"PostgreSQL"},{skillname:"Git"},{skillname:"Linux"},{skillname:"Spark Framework"},{skillname:"Heroku"},{skillname:"Google API"},{skillname:"OpenCV"}],skills:[{skillname:"Java"},{skillname:"JavaScript"},{skillname:"HTML5/CSS"},{skillname:"Python"},{skillname:"C/C++"},{skillname:"SQL"},{skillname:"NoSQL"},{skillname:"TypeScript"},{skillname:"Node.js"}],portfolio:[{name:"ArUco Marker Tracking @ Advanced Robotics at UW",description:["Create custom ArUco markers and implmented marker detection program using OpenCV to allow robot to identify its exact location on the field. Wrote matrix transposition algorithm to convert camera data to usuable robot positional data.","With this positional data, the robots would then be able to build a SLAM map of the field and determine the best path to get to a certain location."],imgurl:"images/portfolio/ArucoMarker.jpg",skills:["OpenCV","python","AI Vision Tracking","SLAM Mapping","Vision Accuracy Testing"],link:""},{name:"UW Campus Map",description:["A web application for finding the shortest path from one building to another at the University of Washington. This applicaiton allows for the inclusion of lesser known campus paths that are not included in typical GPS applicaitons. This was part of a course project for CSE 331 (Software Design and Implementation) at the University of Washington"],imgurl:"images/portfolio/CampusMap.jpg",skills:["React","Typescript","Node.js","Spark Framework","Google API","JUnit Testing","Java"],link:"https://main.d3uqk9wtm98zyo.amplifyapp.com/CampusMap",gitLink:"https://github.com/EdisonLeung/Campus-Map",textLinks:[{link:"https://main.d3uqk9wtm98zyo.amplifyapp.com/CampusMap",text:"View Project"}]},{name:"Imagetagger for Advanced Robotics at UW",description:["An Image Annotation Application to effectively process over 30k+ images to feed into Machine Learning Model used to identify different types of robots. This was a project during my time in Advanced Robotics at the University of Washington.","","This application provides a user friendly interface that allows people to annotate images and upload them to a machine learning model. The backend was developed using PostgreSQL and Prisma API while the frontend uses React, Tailwind, and Next.js "],imgurl:"images/portfolio/Imagetagger.jpg",skills:["React","Tailwind","PostgreSQL","Prisma","Git","Next.js"],link:"",textLinks:[]},{name:"Robotics @ Cedar Park",description:["Designed a robot\u2019s functions per FIRST Robotics Competition\u2019s (FRC) yearly performance and budget requirements, working closely with mentors from Boeing and Microsoft","From 2020-2021 I was the software lead for the shooting division which was responsible for determining the ideal trajectory to hit a target given distance data.","In order to determine the ideal trajectory, we used a cubic spline interpolation algorithm. This would take a distance (given by a Limelight) and interpolate the from a dataset of ideal trajectory data points to find the best trajetory for that distance.","Some of my other responsibilities included: Programming essential motor functions, Building a SLAM Map to enable robot to know location on field, Using SLAM Map to develop an algorithm to assist robot driver to properly align robot with targets, and Managing Electrical and Software compatability","From 2018-2019 years on the team, my contributions helped team qualify for the FRC Worlds Competition in Houston where we became semi-finalists and finalists in 2018 and 2019 repsectively"],imgurl:"images/portfolio/CPR_Robot.jpg",skills:["Java","SLAM Mapping","WPILIB","Git","Vision Tracking","Cubic Interpolation","Matlab","Hardware Software Interface"],link:"",textLinks:[{link:"https://www.cpr3663.com/",text:"Team Website"}]}],noteworthy_projects:[{name:"CSE Student Chat App",description:"Created backend for chat application for Univeristy of Washington CSE Students to connect and chat. Course project for CSE 332 (Algorithms and Parallelism) at UW.",link:"",skills:["Java","Data Structures","Networking","JUnit Testing"]},{name:"Dynamic Memory Allocator",description:"Memory allocator that increases space utilization and decrease throughput using matrix transpose algorithms to optimize cache usage and reduce cache misses",gitLink:"https://github.com/EdisonLeung/Dynamic-Memory-Allocator",link:"https://github.com/EdisonLeung/Dynamic-Memory-Allocator",skills:["C","gdb","blocking","Memory Allocation"]},{name:"Group Calendar Website",description:"Calendar schedule visualization tool to organize the schedules of multiple people or groups. This web application allows users to create calendar groups where they and other people are able to synchronize all their schedules into one cohesive calendar.",skills:["AWS Console, S3, Amplify, Cognito, IAM","Graphql","React","Tailwind"],link:"https://main.d3q58t64yxo8f4.amplifyapp.com/",gitLink:"https://github.com/EdisonLeung/group-calendar"}]};function C(e){var a=e.resumeData;return i.a.createElement("section",{id:"education"},i.a.createElement("h1",{className:"row"},i.a.createElement("span",{className:"title"},"Education")),i.a.createElement("div",{className:"row container"},i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!0,duration:.5},i.a.createElement("div",null,a.education.map(function(e,a){return i.a.createElement("div",{key:a,className:"description"},i.a.createElement("div",{className:"title"},e.UniversityName),i.a.createElement("div",null,e.date),i.a.createElement("ul",null,e.info.map(function(e,a){return i.a.createElement("li",{key:a},e)}),i.a.createElement("li",null,i.a.createElement("b",{className:"title"},"Relevant Coursework (click to learn more):"),i.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:!1,duration:1},i.a.createElement("div",{className:"course-list"},e.courses.map(function(e,a){return i.a.createElement("a",{className:"course-list-item",key:a,href:e.link,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("div",{key:e.name,style:{fontSize:12}},e.name))})))),i.a.createElement("li",{key:e.clubs},i.a.createElement("b",{className:"title"},"Clubs and Organizations (click to learn more):"),i.a.createElement("ul",null,e.clubs.map(function(e){return i.a.createElement("li",{key:e.link},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,className:"course-list-item"},e.name))})))))})))))}var I=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,{resumeData:S}),i.a.createElement(c,{resumeData:S}),i.a.createElement(f,{resumeData:S}),i.a.createElement(C,{resumeData:S}),i.a.createElement(k,{resumeData:S}),i.a.createElement(b,{resumeData:S}),i.a.createElement(N,{resumeData:S}),i.a.createElement(w,{resumeData:S})," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.createRoot(document.getElementById("root")).render(i.a.createElement(I,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.6e313aa1.chunk.js.map