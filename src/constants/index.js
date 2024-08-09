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
    meta,
    starbucks,
    medace,
    tesla,
    csys,
    thp,
    shadow,
    math,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mac,
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
      title: "Biomedical Engineering Researcher",
      icon: web,
    },
    {
      title: "Innovative Project Developer",
      icon: mobile,
    },
    {
      title: "Academic Achiever and Future Medical Professional",
      icon: backend,
    },
    {
      title: "Competitive Presenter and Public Speaker",
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
      title: "Founder and Full Stack Developer",
      company_name: "MedAce.AI",
      icon: medace,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        'Founded and led the development of "Med Ace AI," an advanced AI-powered tool designed to simulate medical school interviews and provide personalized feedback to aspiring medical students.',
        "Implemented and integrated advanced Natural Language Processing (NLP) techniques and AI models, specifically utilizing OpenAI’s GPT-4, to dynamically generate interview questions and analyze user responses for relevance, clarity, and content quality.",
        "Developed robust Text-to-Speech (TTS) and Speech-to-Text (STT) functionalities to enable realistic voice interactions, enhancing the simulation experience for users by allowing them to practice in an environment that closely mimics real interview conditions.",
        "Engineered the backend infrastructure using Python and Django, creating scalable and efficient API endpoints to manage interview sessions, process user inputs, and deliver real-time feedback.",
      ],
    },
    {
      title: "Orthopaedic Clinical Research Intern",
      company_name: "Hamilton Health Sciences | Juravinski Hospital",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Conducted a multi-centre longitudinal study on wait times for hip/knee replacements in osteoarthritis patients under Dr. Thomas Wood",
        "Engineered and maintained a robust SQL and REDCap database for 3,000 patients, improving data retrieval time by 20%.",
        "Developed advanced machine learning models with over 85% accuracy to predict patient trajectories based on pre-operative symptoms.",
        "Monitored pre-operative and post-operative pain, functional ability, and opioid use through the administration of standardized questionnaires, including the H/KOOS-JR and EQ5D",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter AI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Built 5+ API apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.",
        "Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns.",
        "Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns."
      ],
    },
    {
      title: "Biomedical Device Researcher",
      company_name: "University of Waterloo",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Collaborated with Professor George Shaker to optimize a ligand-targeted, smart liposomal drug delivery system for ILD treatment.",
        "Developed machine learning algorithms with Python, TensorFlow, and Keras, improving drug delivery targeting by 15%.",
        "Utilized AI techniques with Keras and Scikit-learn to analyze large datasets of patient responses and refine drug delivery protocols, enhancing treatment efficacy by 20%.",
        "Designed and simulated biomedical engineering models using MATLAB and COMSOL to test the behavior of liposomal drug delivery in virtual environments, reducing the need for initial physical trials by 30%."

      ],
    },
    {
      title: "Pharmacy Assistant",
      company_name: "Shoppers Drug Mart",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Assisted pharmacists in dispensing over 1,000 prescription medications to patients weekly.",
        "Managed inventory, ensuring 98% accuracy in ordering and restocking supplies, utilizing inventory management software.",
        "Coordinated with insurance companies to verify coverage and managed pre-authorization processes, improving patient access to medications by 20%.",
        "Utilized pharmacy management software to streamline operations and enhance workflow efficiency."
      ],
    },
    {
    title: "Robotics Mentor",
      company_name: "Canadian School of Young Scholars",
      icon: csys,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - May 2022",
      points: [
        "Guided students in designing and programming EV3 and VEX robots using LEGO Mindstorms, leveraging Python and JavaScript.",
        "Developed and implemented software algorithms using Python and EV3-G to control EV3 robots, improving task completion efficiency by 25%.",
        "Created a Rubik's Cube solver using advanced algorithms and AI techniques, showcasing practical applications of software engineering."

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

  // Add this to your constants.js file
export const education = [
  {
    school: 'McMaster University',
    degree: 'Integrated Biomedical Engineering and Health Sciences',
    field: 'Applied Science',
    date: '2024-2029',
    image: mac, // Ensure this path is correct
  },
];



export const volunteerExperiences = [
  {
    title: "Dialysis Assistant",
    company_name: "Trillium Health Partners",
    icon: thp,
    iconBg: "#E8A317",
    date: "May 2024 - Present",
    points: [
      "Supported outpatient visits at the Outpatient Speakman Renal Dialysis Care Center.",
      "Conducted patient intake and maintained accurate records.",
      "Collaborated with nephrologists and nurses to ensure optimal patient outcomes in dialysis care"
    ]
  },
  {
    title: "Clinical Shadowing",
    company_name: "Juravinski Hospital, Royal Oak Clinic, Renal Care Centre",
    icon: shadow,
    iconBg: "#1E90FF",
    date: "Sept 2022- Present",
    points: [
      "Juravinski Hospital - Orthopaedics, Dr. Thomas Wood, MD. Clinical & Surgery",
      "Royal Oak Clinic - Family Medicine, Dr. Evis Skendaj, MD.",
      "Renal Care Centre - Dialysis, Dr. Sharn Bhandal, MD."
    ]
  },
  {
    title: "STEM Teacher Assistant",
    company_name: "Mathstronauts",
    icon: math,
    iconBg: "#00000",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Provided comprehensive assistance to students on a variety of technical projects, specializing in graphic design, programming, and 3D modeling.",
      "Leveraged advanced tools such as CAD and AutoCAD to enhance project outcomes and ensure precision in design and execution."
    ]
  }
];

export const publishedResearch = [
  {
    title: 'Optimization of a Ligand-Targeted, Smart Liposomal Drug Delivery System for the Treatment of Interstitial Lung Disease Using CHIR99021',
    date: '2024',
    journal: 'Wireless Devices and Sensors Lab - University of Waterloo',
    icon: shopify, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Reviewed the optimization of a ligand-targeted, smart liposomal drug delivery system using CHIR99021 for ILD treatment.',
      'Explored liposomal formulations advantages: enhanced drug stability, bioavailability, and precise delivery to affected lung tissues.',
      'Characterized liposomal formulations using dynamic light scattering (DLS), high-performance liquid chromatography (HPLC), and zeta potential measurements, achieving a uniform size distribution (~100 nm) and high encapsulation efficiency (90% ± 5%).',
      'Anticipated significant morphological changes for PS400 and PCD formulations post-exposure, with DLC and TiMoS2 formulations maintaining their as-received appearance.'
    ],
    link: 'https://www.researchgate.net/publication/382938698_Optimization_of_a_Ligand-Targeted_Smart_Liposomal_Drug_Delivery_System_for_the_Treatment_of_Interstitial_Lung_Disease_Using_CHIR99021', // Add link to the research paper

  },

  {
    title: 'The effects of chlorhexidine, povidone-iodine and vancomycin on growth and biofilms of pathogens that cause prosthetic joint infections: an in-vitro model',
    date: '2024',
    journal: 'The Journal of hospital infection',
    icon: starbucks, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Investigated the effects of chlorhexidine gluconate (CHG), povidone-iodine (PI), and vancomycin on pathogen growth and biofilm formation in prosthetic joint infections (PJI) using an in-vitro model.',
      'Employed checkerboard assays to measure potential synergy of CHG and PI together and with vancomycin.',
      'Highlighted the need for careful consideration of vancomycin use in P. aeruginosa infections.'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/38992843/', // Add link to the research paper

  },

  {
    title: 'When does patient function "Plateau" after total joint arthroplasty? A cohort study',
    date: '2024',
    journal: 'International orthopaedics',
    icon: starbucks, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Analyzed the trajectory of patient-reported outcome measures (PROMs) following total hip arthroplasty (THA) and total knee arthroplasty (TKA) to determine when patient function plateaus.',
      'Mean pre-operative Oxford scores were 18.0 (±7.8) for THA and 20.1 (±7.5) for TKA.',
      'Concluded that patients can expect clinically meaningful improvements within the first six months after surgery, with a plateau in PROMs beyond this period.'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/39007939/', // Add link to the research paper

  },

  {
    title: 'CRISPR and the LRP5 Gene: Displaying the Power of Gene Editing for Bone Health',
    date: '2023',
    journal: 'Juno Journal',
    icon: shopify, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Integration of CRISPR gene editing technology with the pivotal LRP5 gene harbour potential for significant advancements in the fields of scientific research, personalized healthcare, and agricultural development.'
    ],
    link: 'https://medium.com/@arishshahab/crispr-and-the-lrp5-gene-displaying-the-power-of-gene-editing-for-bone-health-9f7e55217cca', // Add link to the research paper

  },
];
  
  const projects = [
    {
      name: "Aqua Boost",
      description:
        "Aqua Boost is an advanced hydration system designed to optimize water intake by utilizing bioimpedance sensors to monitor and analyze the body's hydration levels in real-time, ensuring precise and personalized hydration management.",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
        {
          name: "AutoCAD",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "Raspberry PI",
          color: "blue-text-gradient",
        },
        {
          name: "Keras",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/arishs24/aqua_boost",
    },
    {
      name: "Pantry Tracker",
      description:
        "Web application developed to streamline the process of tracking and managing pantry items using AI and ML.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "GCP",
          color: "green-text-gradient",
        },
        {
          name: "Vercel",
          color: "pink-text-gradient",
        },
        {
          name: "GPT Vision API",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "CI/CD",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/arishs24/inventory_tracker",
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio using ThreeJS to showcase 3D models and animations, creating an interactive and visually impressive user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/arishs24/Portfolio-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };