import {
    mobile,
    backend,
    web,

    html,
    css,
    javascript,
    reactjs,
    python,
    mongodb,
    linux,
    git,
    aws,
    jenkins,
    ansible,
    docker,
    kubernetes,

    everydayhealth,
    bestbuy,
    carrent,
    jobit,
    highschool,

    resume,
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
      url:resume,
      title: "Resume", 
    },
    {
      url:"https://www.linkedin.com/in/mahfuzulislamdev/",
      title: "LinkedIn",
      
    },
    {
      url:"https://github.com/mahfuz6543",
      title: "GitHub",
      
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DevOps Engineer",
      icon: web,
    },
    {
      title: "Web Devloper",
      icon: mobile,
    },
    {
      title: "System Administrator",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
    },  
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    }, 
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Ansible",
      icon: ansible,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
  ];
  
  const experiences = [
    {
      title: "Associate DevOps Engineer",
      company_name: "Everyday Health",
      icon: everydayhealth,
      iconBg: "#21decc",
      date: "June 2022 - Present",
      points: [
        "Enhanced Maven builds processes and optimized Jenkins CI/CD pipelines by integrating Git, Docker, and Kubernetes to streamline automated workflows and ensure seamless deployments.",
        "Managed provisioning and administration of AWS services, including EC2, IAM, RDS, Route 53, VPC, DynamoDB, Elastic Load Balancing, Auto Scaling, Lambda, SES, SQS, and SNS, to maintain efficient and secure cloud infrastructures.",
        "Developed and maintained Terraform modules for infrastructure as code (IaC), managing state files and incorporating automated infrastructure provisioning into CI/CD pipelines.",
        "Automated configuration management and application deployments using Ansible playbooks, roles, and inventory files to enhance consistency and reduce manual effort.",
      ],
    },
    {
      title: "IT Operations Analyst",
      company_name: "Best Buy",
      icon: bestbuy,
      iconBg: "#E6DEDD",
      date: "November 2019 - May 2022",
      points: [
        "Configured, deployed, and maintained Linux and Windows servers to support critical applications and ensure smooth IT operations within the insurance domain.",
        "Maintained platform security and data availability by regularly updating, applying patches, and managing backup processes to safeguard business continuity.",
        "Monitored the performance and resource utilization of cloud-based and on-premises servers, optimizing operational efficiency and ensuring consistent service availability.",
        "Troubleshot and resolved operating system and server-related issues promptly to minimize downtime and maintain seamless insurance business workflows.",
      ],
    },
  ];
  

  const projects = [
    {
      name: "Personal Projects",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mahfuz6543/Personal_Proejcts",
      source_project: "",
    },
    {
      name: "College Work",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mahfuz6543/College_Work",
      source_project: "",
    },
    {
      name: "High School Work",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: highschool,
      source_code_link: "https://github.com/mahfuz6543/HS_Work",
      source_project: "https://mahfuz6543.github.io/HS_Work/",
    },
  ];

  const contacts = [
    {
      linkedin_link: "https://www.linkedin.com/in/mahfuzulislamdev/",
    },

  ];
  
  export { services, technologies, experiences, projects, contacts };