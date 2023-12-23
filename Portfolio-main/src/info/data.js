import { nanoid } from 'nanoid';

export const headData = {
  title: 'Mayank Solanki | Developer',
  lang: 'en',
  description: 'Mayank Solanki | Developer',
};

export const heroData = {
  title: '',
  name: 'Mayank Solanki',
  subtitle: "I'm Full Stack Developer",
  cta: '',
};

export const aboutData = {
  img: 'Profile.jpg',
  paragraphOne:
    'I am  currently working as a Full Stack Developer.Learning quality skills and work. I want to be a developer as I am interested in developing new things which excite me a lot.',
  paragraphTwo: 'I love exploring new technologies and being a practitioner.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/15n6n8pdHgqRFml5-kRval5BLG2jmH8VN/view?usp=sharing',
};

export const skillsData = [
  {
    id: nanoid(),
    img: 'skills/javascript-colored.jpg',
    title: 'JavaScript',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: nanoid(),
    img: 'skills/mysql-colored.jpg',
    title: 'MySql',
    info: '',
    info2: '',
    url: 'https://www.mysql.com/',
  },
  {
    id: nanoid(),
    img: 'skills/react-colored.jpg',
    title: 'React',
    info: '',
    info2: '',
    url: 'https://reactjs.org/',
  },
  {
    id: nanoid(),
    img: 'skills/html5-colored.jpg',
    title: 'HTML5',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    id: nanoid(),
    img: 'skills/css3-colored.jpg',
    title: 'CSS3',
    info: '',
    info2: '',
    url: 'https://www.w3.org/TR/CSS/#css',
  },
  {
    id: nanoid(),
    img: 'skills/bootstrap-colored.jpg',
    title: 'Bootstrap',
    info: '',
    info2: '',
    url: 'https://getbootstrap.com/',
  },
  // {
  //   id: nanoid(),
  //   img: 'skills/materialui-colored.jpg',
  //   title: 'Material UI',
  //   info: '',
  //   info2: '',
  //   url: 'https://mui.com/',
  // },
  {
    id: nanoid(),
    img: 'skills/nodejs-colored.jpg',
    title: 'NodeJS',
    info: '',
    info2: '',
    url: 'https://nodejs.org/en/',
  },
  {
    id: nanoid(),
    img: 'skills/mongodb-colored.jpg',
    title: 'MongoDB',
    info: '',
    info2: '',
    url: 'https://www.mongodb.com/',
  },
  {
    id: nanoid(),
    img: 'skills/c-shap.jpg',
    title: 'C#',
    info: '',
    info2: '',
    url: 'https://www.c-sharpcorner.com/csharp-tutorials',
  },
  {
    id: nanoid(),
    img: 'skills/Asp-Net-MVC.jpg',
    title: 'Asp.Net',
    info: '',
    info2: '',
    url: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
  },
  {
    id: nanoid(),
    img: 'skills/java.jpg',
    title: 'JAVA',
    info: '',
    info2: '',
    url: 'https://www.java.com/en/',
  },
  {
    id: nanoid(),
    img: 'skills/Springboot.jpg',
    title: 'Spring Boot',
    info: '',
    info2: '',
    url: 'https://spring.io/projects/spring-boot/',
  },

];



// EXPERIENCE DATA
 export const experienceData = [
  {
    title: 'Web Developer',
    company_name: 'Rudiment Webtech Solution, Indore',
    icon: 'experience/coverhunt.png',
    iconBg: '#333333',
    date: 'Jun 2021 - Dec 2022',
  },
];


// PROJECT DATA
export const projectsData = {
  projects: [
    {
      id: nanoid(),
      img: 'projects/cardispensary.png',
      title: 'Car-Dispensary',
      info: 'Reliable and Cost-effective Car Services a Car Servicing platform where customers can book their service and Garage can register their Garage',
      info2: 'Technology :  ASP.Net WebApi (C#), MySql Server, React JS.Tools : Visual Studio, Git, VS Code , Figma, Draw IO',
      url: 'https://cardispensary.netlify.app/',
      repo: 'https://github.com/mayank-ji/CarServiceWebProject',
    },
    {
      id: nanoid(),
      img: 'projects/todo.jpg',
      title: 'Todo List',
      info: 'Your To-Do List is a user-friendly task management application designed to streamline task organization and productivity. It offers essential features, such as task creation, deletion, and completion tracking. Users can also easily review completed tasks for a more organized and efficient workflow.',
      info2: 'Technology :  React JS, CSS, JavaSript',
      url: 'https://mayank-todolist.netlify.app/',
      repo: 'https://github.com/mayank-ji/MERNToDOList',
    },
    {
      id: nanoid(),
      img: 'projects/travel-website.jpg',
      title: 'Travel-Website using html css',
      info: 'this awesome fully responsive travel website using only HTML, CSS. It is fully responsive and has animation on scroll, smooth scrolling, tile animated background images slider and a lot of stuff.',
      info2: 'Technology :  HTML, CSS',
      url: 'https://mayank-travel-website.netlify.app/',
      repo: 'https://github.com/mayank-ji/Travel-Website-',
    },
  ],
  seeMore : {
    cta: 'See More On Github',
    link: 'https://github.com/mayank-ji',
  }
};

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Would you like to connect with me? Awesome!',
  btn: "Let's Connect",
  linkedIn: 'https://www.linkedin.com/in/mayank-solanki-12a3b0176',
  email: 'manusolanki069752@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mayank-solanki-12a3b0176',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mayank-ji',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
