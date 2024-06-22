export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Committed to Collaborative Development and Clear Communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to Global Time Zones for Seamless Communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Enthusiastic Developer with a Passion for Cutting-Edge Technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a FullStack Developer",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Collaborate on Your Next Project? Let’s Connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Land Registration Blockchain",
    des: "Immutable and transparent applica- tion based on Ethereum Blockchain to overcome the land ownership issues, User can register their property,further validated by the govt and finally, the transaction takes",
    img: "/blockchain.webp",
    iconLists: [
      "/re.svg",
      "/sass.svg",
      "/metamask.png",
      "/solidity-l.svg",
      "/ethereum.svg",
      "node.svg",
    ],
    link: "https://github.com/thejatinchawla/Land-Registration-Based-on-Blockchain",
  },
  {
    id: 2,
    title: "Packers and Movers",
    des: "Reactjs web Application where you can find many rated individual contractors. User can choose the contactors according to their rating,pricing,etc, also submit the quotation for their entire shifting,track, pay, give feedback online.",
    img: "/packersmovers.jpg",
    iconLists: ["/re.svg", "/bg.svg", "/node.svg", "mongo.svg"],
    link: "https://github.com/thejatinchawla/Packers-And-Movers-MERN",
  },
  {
    id: 3,
    title: "NodeJs : Backend Authorization",
    des: "An authentication and authorization backend server build using NodeJS, Express & MongoDB",
    img: "/nodejs.jpg",
    iconLists: ["/node.svg", "/handlebars.svg", "/jwt.png", "mongo.svg"],
    link: "https://github.com/thejatinchawla/Nodejs-backend_Auth",
  },
  {
    id: 4,
    title: "FundMe-Ethereum-Dapp",
    des: "A Ethereum based dApp which allows users to donate funds",
    img: "/blockchain.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/metamask.png",
      "/solidity-l.svg",
      "/ethereum.svg",
    ],
    link: "https://github.com/thejatinchawla/FundMe-Ethereum-Dapp",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia felis id luctus condimentum. Phasellus blandit justo non varius rutrum. Integer enim elit, accumsan quis consequat vehicula, congue in nisl. Cras egestas at leo id ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec.      ",
    name: "John Doe",
    title: "Director of XYZ",
    img: "/profile.svg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia felis id luctus condimentum. Phasellus blandit justo non varius rutrum. Integer enim elit, accumsan quis consequat vehicula, congue in nisl. Cras egestas at leo id ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec.      ",
    name: "John Doe",
    title: "Director of XYZ",
    img: "/profile.svg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia felis id luctus condimentum. Phasellus blandit justo non varius rutrum. Integer enim elit, accumsan quis consequat vehicula, congue in nisl. Cras egestas at leo id ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec.      ",
    name: "John Doe",
    title: "Director of XYZ",
    img: "/profile.svg",
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
    title: "Frontend Engineer",
    desc: "Transformed the UI, enhancing performance and aesthetics with some cool animations using GatsbyJs, Tailwind CSS & Strapi CMS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "FullStack Developer",
    desc: "Addressed & resolved more than 30+ issues, resulting in optimized website performance. Boosted the efficiency of the backend API’s search function by a significant percentage.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Developed a responsive e-commerce website using React and Node.js. Integrated payment gateways and enhanced user experience with dynamic animations.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend API Developer",
    desc: "Developed robust APIs to facilitate user, admin, and staff interactions. Enhanced system functionality and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/thejatinchawla",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/thejatinkhatri",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/jatin-chawla-2a167720a",
  },
];
