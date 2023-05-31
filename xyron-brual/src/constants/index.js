export const languages = [
  "Python",
  "HTML",
  "JavaScript",
  "CSS",
  "PHP",
  "C",
  "C++",
  "C#",
  "Bash",
  "Perl",
  "Java",
  "SQL",
  "Lua",
  "R",
];

export const technologies = [
  "Git",
  "Node.js",
  "Flutter",
  "MySQL",
  "Flask",
  "Django",
  "React",
  "OpenCV",
  "TensorFlow",
  "Streamlit",
  "Unity Engine",
  "Blender",
  "Microsoft Office",
  "Linux",
  "Windows",
];

// TBC
export const projects = [
  {
    title: "Case Study on Video Games: Genre study",
    date: "April 2023",
    description:
      "A case study that aims to understand the correlations between video game genres and their popularity. This research makes use of MetaCritic data from 2016.",
    tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    img: null,
    kaggle:
      "https://www.kaggle.com/code/xyronbrual/case-study-on-video-games-genre-study",
  },
  {
    title: "Floppy Bird",
    date: "April 2023",
    description:
      "A flappy bird clone for PC built using Python's PyGame module with score saving using Python's Pandas module.",
    tech: ["Python", "PyGame", "Pandas"],
    img: require("../imgs/projects/floppy_bird.png"),
    github: "https://github.com/xyronic15/Floppy-Bird.git",
  },
  {
    title: "Queen's Square Doctor's Employee Manual",
    date: "Jan 2023 - Mar 2023",
    description:
      "A manual documenting the basic tasks and responsibilities of new staff in order to reduce training time as well as provide older staff with information they can go back and refer to.",
    tech: ["Canva"],
    img: null,
  },
  {
    title: "Case Study: How Does a Bike-Share Navigate Speedy?",
    date: "Feb 2023",
    description:
      "This case study is the Capstone project requirement to complete the Google Data Analytics Professional Certificate. The scenario of this case study involves a bikeshare company's data of its customer's trip details over a 12-month period (February 2022-January 2023) and wil be employing the 6 phases of Data analysis process: Ask, Prepare, Process, Analyze and Act.",
    tech: ["R"],
    img: null,
    kaggle:
      "https://www.kaggle.com/code/xyronbrual/case-study-how-does-a-bike-share-navigate-speedy",
  },
  {
    title: "Stocks Recommendation System",
    date: "Sep 2021 - Mar 2022",
    description:
      "The Stocks Recommendation System is a web application developed using Python, Django, and various other technologies. It enables users to track stocks and make buy/sell/stay decisions based on advanced predictive algorithms and popular trading strategies. Powered by a neural network with LSTM cells, the system achieves a strong correlation of 0.86 when predicting S&P 500 stock prices.",
    tech: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL",
      "Django",
      "Bootstrap",
      "Tensorflow",
    ],
    img: require("../imgs/projects/stocks_recommendation-system.png"),
    github: "https://github.com/xyronic15/Stock-Recommendation-System-Django",
  },
  {
    title: "Packet Sniffing Firewall",
    date: "Jan 2022 - Mar 2022",
    description:
      "The Packet Sniffing Firewall is a Python application developed for Windows systems to enhance network security. The system employs an algorithm that examines packets in the transport layer and determines their safety based on registered DNS requests. By detecting potential threats and taking appropriate actions, the firewall effectively safeguards the network infrastructure.",
    tech: ["Python"],
    img: null, //TBC
    github: "https://github.com/xyronic15/Packet-Sniffer",
  },
  {
    title: "Stocks R Us",
    date: "Sep 2021 - Dec 2021",
    description:
      "Stocks R Us is a Dart/Flutter mobile app with Python/Flask backend, following the MVC architecture. It enables users to track stocks, personalize favorites, and retrieve real-time data from Yahoo! Finance. Stocks R Us offers a comprehensive solution for stock tracking and management on mobile devices.",
    tech: ["Dart", "Python", "Flutter", "Flask"],
    img: require("../imgs/projects/stocks_r_us.png"),
    github: "https://github.com/xyronic15/StockInfo-Mobile-Application",
  },
  {
    title: "Facial Recognition System",
    date: "Jan 2021 - Mar 2021",
    description:
      "The Facial Recognition System is a Python-based project that leverages technologies such as OpenCV, face_recognition, and PySimpleGUI to create a highly accurate facial recognition system. With a 99% accuracy rate in identifying 'known' users, the system utilizes reference images and information of individuals to compare against faces in other images and live scans.",
    tech: ["Python", "OpenCV", "PySimpleGUI"],
    img: require("../imgs/projects/facial_recognition_system.png"),
    github: "https://github.com/Janahan10/SOFE-3720-AI-Final-Project",
  },
  {
    title: "Cars Canada",
    date: "Sep 2020 - Dec 2020",
    description:
      "Cars Canada is a car rental website project developed for the design and development of a fully functional car rental platform. Cars Canada offers a seamless and convenient online platform for users to rent cars with ease.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Bootstrap"],
    img: require("../imgs/projects/cars_canada.png"),
  },
  {
    title: "K-Means Color Clustering",
    date: "Jul 2020 - Aug 2020",
    description:
      "The K-Means Color Clustering project  utilizes K-Means clustering to quantize the color scheme of an image. By inputting an image and selecting the desired number of clusters, the program generates a quantized image, where colors are represented by the most prominent clusters.",
    tech: ["Python", "SciKit", "Streamlit"],
    img: null, //TBC
    github: "https://github.com/xyronic15/K-Means-Coloring",
  },
  {
    title: "Endless Battle",
    date: "Jul 2020 - Aug 2020",
    description:
      "Endless Battle is a 2D platforming and fighter game developed using the Unity Engine and C#. The project also includes a procedural level generator, ensuring unique platform placements for each new level, and enemies with varying difficulty levels, movement and attack speeds, health, and attack damage. Endless Battle provides an immersive and challenging gaming experience on the PC platform.",
    tech: ["Unity Engine", "C#", "Blender"],
    img: require("../imgs/projects/endless_battle.png"),
    github: "https://github.com/xyronic15/Endless-Battle",
  },
  {
    title: "The Great Plateau",
    date: "Aug 2019 - Sep 2019",
    description:
      "The Great Plateau project involves the meticulous recreation of a section from the renowned Nintendo game Legend of Zelda: Breath of the Wild. Using various tools and techniques, the project replicates the terrain, textures, and environmental elements, to bring the iconic Great Plateau scene to life in Unity.",
    tech: ["Unity Engine", "Blender"],
    img: require("../imgs/projects/great_plateau.png"),
  },
  // {
  //   title: "Queen's Square Doctor's Employee Manual",
  //   date: "Jan 2023 - Mar 2023",
  //   description:
  //     "A manual documenting the basic tasks and responsibilities of new staff in order to reduce training time as well as provide older staff with information they can go back and refer to.",
  //   tech: ["Canva"],
  //   img: null,
  // },
  // {
  //   title: "Stock Recommendation System",
  //   date: "Sep 2021 - Mar 2022",
  //   description: "",
  //   tech: [""],
  //   img: null,
  // },
];

export const certifications = [
  {
    name: "Google Data Analytics",
    date: "February 2023",
    org: "Google",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4SG8D8LT5NF6",
  },
  {
    name: "Aconex Accredited Level (Specialist)",
    date: "January 2023",
    org: "Oracle",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://learn.oracle.com/ols/home/83037",
  },
  {
    name: "Aconex Accredited Level (Professional)",
    date: "January 2023",
    org: "Oracle",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://learn.oracle.com/ols/home/80533",
  },
  {
    name: "Aconex Accredited Level (Associate)",
    date: "January 2023",
    org: "Oracle",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://learn.oracle.com/ols/home/77696",
  },
  {
    name: "Data Analysis with Python",
    date: "January 2023",
    org: "freeCodeCamp",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://freecodecamp.org/certification/fccb4e5b087-b78e-4f03-b818-4887c9042617/data-analysis-with-python-v7",
  },
  {
    name: "Machine Learning with Python",
    date: "January 2023",
    org: "freeCodeCamp",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://freecodecamp.org/certification/fccb4e5b087-b78e-4f03-b818-4887c9042617/machine-learning-with-python-v7",
  },
  {
    name: "Scientific Computing with Python",
    date: "January 2023",
    org: "freeCodeCamp",
    // tech: ["Python", "Pandas", "NumPy", "MatPlotLib"],
    url: "https://freecodecamp.org/certification/fccb4e5b087-b78e-4f03-b818-4887c9042617/scientific-computing-with-python-v7",
  },
];

export const experiences = [
  {
    title: "Data Analyst/Developer Intern",
    date: "April 2023",
    company: "Cognixia",
    description: [
      "Acquired proficiency in diverse data manipulation and visualization techniques through training with Cognixia experts",
      "Demonstrated strong teamwork and project coordination skills by leading multiple collaborative projects, leveraging Git, Python, Object-Oriented Programming, and Visual Studio Code",
      "Strengthened technical and soft skills, including Agile framework understanding and Database Management Systems, through comprehensive training",
    ],
  },
  {
    title: "Tutor",
    date: "February 2023 - Present",
    company: "ClubZ Tutoring",
    description: [
      "Evaluated multiple high school students in STEM subjects",
      "Facilitated lectures for depending on the current topics of the students' classes",
      "Advised students on the optimal ways to solve in-class problems",
      "Coached students in time management and study skills",
    ],
  },
  {
    title: "Medical Administration",
    date: "May 2022 - December 2022",
    company: "Queens Square Doctors",
    description: [
      "Facilitated communication between doctors and patients by serving as an intermediary, ensuring proper management of admissions, prescriptions, and medical claims",
      "Prioritized patient care by efficiently managing phone calls, check-ins, and allocation of patient rooms",
      "Supported management in coordinating workflow by managing medical staff documentation and equipment, demonstrating excellent organizational and multitasking skills",
    ],
  },
  {
    title: "Assistant Store Manager/IT Technician",
    date: "September 2018 - April 2022",
    company: "Tip-Top Creamery Ltd.",
    description: [
      "Programmed cash registers, websites, and installed security cameras, effectively supporting the organization's IT infrastructure",
      "Maintained and troubleshot monetary systems to ensure seamless workflow, demonstrating a keen attention to detail and problem-solving abilities",
      "Designed and developed the organization's main website to enhance customer engagement and understanding of the services provided",
      "Managed various aspects of inventory, purchase orders, and deliveries, ensuring smooth operations of the store",
      "Led the renovation and interior fit-out of the store, showcasing strong project management and leadership skills",
    ],
  },
];
