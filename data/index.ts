import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaLightbulb, FaRocket, FaReact, FaNodeJs, FaGit, FaDocker, FaAws, FaCss3} from 'react-icons/fa';

export const navItems = [
   { name: "Entrance", link: "#hero" },
   { name: "Chamber", link: "#about" },
   { name: "Case Files", link: "#projects" },
   { name: "Mastery", link: "#skills" },
   { name: "Echoes", link: "#testimonials" },
   { name: "Exit Door", link: "#contact" },
];

export const gridItems = [
   {
    id: 1,
    title: "Master Architect Eyob",
    description: "The gatekeeper of this digital maze.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500",
    titleClassName: "justify-end",
    img: "/eyob_profile.jpg",
    spareImg: "",
   },
   {
    id: 2,
    title: "Global network synchronization. No time zone is a barrier.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
   },
   {
    id: 3,
    title: "The Arsenal",
    description: "Every puzzle needs the right tool",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
   },
   {
    id: 4,
    title: "Analytical mind with a passion for architectural puzzles.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
   },
   {
    id: 5,
    title: "Constructing the Next Secure Vault",
    description: "System Blueprint",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
   },
   {
    id: 6,
    title: "Are you ready to solve the next big challenge?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
   },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "/re.svg", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 90, icon: "/next.svg", color: "from-white to-gray-300" },
      { name: "TypeScript", level: 88, icon: "/ts.svg", color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 92, icon: "/tail.svg", color: "from-cyan-400 to-blue-500" },
      { name: "Three.js", level: 75, icon: "/three.svg", color: "from-purple-400 to-pink-500" },
      { name: "GSAP", level: 70, icon: "/gsap.svg", color: "from-green-400 to-green-600" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "/nodejs.svg", color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 80, icon: "/express.svg", color: "from-gray-400 to-gray-600" },
      { name: "MongoDB", level: 78, icon: "/mongodb.svg", color: "from-green-500 to-green-700" },
      { name: "REST APIs", level: 88, icon: "/restapi.svg", color: "from-blue-400 to-blue-600" },
      { name: "Appwrite", level: 75, icon: "/app.svg", color: "from-red-400 to-red-600" },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90, icon: "/git.svg", color: "from-orange-400 to-red-500" },
      { name: "Docker", level: 70, icon: "/dock.svg", color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 65, icon: "/aws.svg", color: "from-yellow-400 to-orange-500" },
      { name: "CI/CD", level: 75, icon: "/cicd.svg", color: "from-green-400 to-blue-500" },
      { name: "Cloudinary", level: 80, icon: "/cloud.svg", color: "from-blue-400 to-purple-500" },
    ]
  }
];
    
    export const projects = [
   {
    id: 1,
    title: "Daynamic movie web app",
    des: "Explore the movie web app you'll enjoy without the hassle.",
    img: "/MovieApp.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg"],
    link: "https://github.com/eyob13-coder/movieverse",
   },
   {
    id: 2,
    title: "Snapcast: Screen Recording App",
    des: "Simplify your video Recording experience with snapcast. Seamlessly connect with sfriends.",
    img: "/Sreen.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/eyob13-coder/Screen-Recorder",
   },
   {
    id: 3,
    title: "Converso",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/Converso.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/eyob13-coder/SAAS-App",
   },
     {
      id: 4,
     title: "AI-Resume-Analayzer",
     des: "A modern, full-stack web application for analyzing resumes using AI, providing ATS (Applicant Tracking System) feedback and improvement tips. Built with React, React Router, TypeScript, Zustand, and TailwindCSS.",
     img: "/resume.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg",],
    link: "https://github.com/eyob13-coder/AI-resume-analyzer",
     },
    ];
    
    export const testimonials = [
   {
    quote:
     "Collaborating with Eyob was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eyob's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eyob is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
   },
   {
    quote:
    
    "Collaborating with Eyob was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eyob's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eyob is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
   },
   {
    quote:
     "Collaborating with Eyob was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eyob's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eyob is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
   },
   {
    quote:
     "Collaborating with Eyob was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eyob's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eyob is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
   },
   {
    quote:
     "Collaborating with Eyob was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eyob's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eyob is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
   },
    ];
    
    export const companies = [
   {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
   },
   {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
   },
   {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
   },
   {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
   },
   {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
   },
    ];
    
    export const workExperience = [
   {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
   },
   {
    id: 2,
    title: "Jounior Cloud-Engineer",
    desc: "Currently learning Cloud-Engineering brought by MentorMeCollective associated with Google Cloud",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
   },
   {
    id: 3,
    title: "Freelance  Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
   },
   {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
   },
    ];
    
    export const socialMedia = [
       {icon: FaGithub, href: "https://github.com/eyob13-coder", label: "GitHub" },
       {icon: FaLinkedin, href: "https://www.linkedin.com/in/eyob-geremew-1a7b53302", label: "LinkedIn"},
       {icon: FaTwitter, href: "https://x.com/Eyob_Geremew_", label: "Twitter" }]
    

export const resumeData = {
  downloadUrl: "/resume.pdf",
  previewUrl: "/resume.png",
  title: "Download My Resume",
  description: "Get a detailed overview of my experience, skills, and achievements"
};


export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    excerpt: "Learn the best practices for creating robust, scalable applications using the MERN stack. From architecture decisions to deployment strategies.",
    category: "Development",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
    readTime: "5 min read",
    date: "2024",
  },
  {
    id: 2,
    title: "Next.js 15: What's New & Exciting",
    excerpt: "Exploring the latest features in Next.js 15, including the new app router improvements, performance enhancements, and developer experience upgrades.",
    category: "Next.js",
    icon: FaRocket,
    color: "from-purple-500 to-pink-500",
    readTime: "7 min read",
    date: "2024",
  },
  {
    id: 3,
    title: "AI in Modern Web Development",
    excerpt: "How artificial intelligence is revolutionizing web development workflows, from code generation to automated testing and optimization.",
    category: "AI & Future",
    icon: FaLightbulb,
    color: "from-green-500 to-emerald-500",
    readTime: "6 min read",
    date: "2024",
  },
];

export const techIcons = [
  { name: "React", icon: FaReact, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "▲", color: "from-white to-gray-300" },
  { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: FaNodeJs, color: "from-green-400 to-green-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "Tailwind", icon: FaCss3, color: "from-cyan-400 to-blue-500" },
  { name: "Three.js", icon: "3D", color: "from-purple-400 to-pink-500" },
  { name: "Docker", icon: FaDocker, color: "from-blue-400 to-blue-600" },
  { name: "Git", icon: FaGit, color: "from-orange-400 to-red-500" },
  { name: "AWS", icon:FaAws, color: "from-yellow-400 to-orange-500" },
];