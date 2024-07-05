import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    prosia,
    eska,
    interia
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Node js Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "PROSIA (PT Pro Sistimatika Automasi)",
      icon: prosia,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Feb 2024",
      points: [
        "Developing and maintaining web applications using React.js, Node js, and postgressql with related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, devOps Engineer, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participate in resolving conflict on Version Control System with devOps Engineer.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "e-SKA",
      description:
        "Web Application for managing documents related to export for Exporters.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgressql",
          color: "green-text-gradient",
        },
        {
          name: "prime react",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "gray-text-gradient",
        },
      ],
      source_code_link: 'https://ska.kemendag.go.id/',
      image: eska,
    },
    {
      name: "interia",
      description:
        "Simple E-Commerce Web Application to buy and sell furniture products.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: interia,
      source_code_link: "https://github.com/DanielsonNg/Simple-E-Commerce",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };