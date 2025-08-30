import robot1 from '../assets/images/grid/robot-1.png';
import robot4 from '../assets/images/grid/robot-4.png';
import robot5 from '../assets/images/grid/robot-5.png';
import robot6 from '../assets/images/grid/robot-6.png';
import robot7 from '../assets/images/grid/robot-7.png';
import robot9 from '../assets/images/grid/robot-9.png';
import robot11 from '../assets/images/grid/robot-11.png';
import robot12 from '../assets/images/grid/robot-12.png';
import robot13 from '../assets/images/grid/robot-13.png';
import robot14 from '../assets/images/grid/robot-14.png';
import robot from '../assets/images/grid/robot.png';

const libraryData = [
  {
    id: 1,
    photo: robot1,
    title: 'Video Title 1',
    price: '10$',
    description:
      'A detailed description for video 1. This is a very interesting video that explores the world of web development and modern technologies. You will learn about the latest trends, best practices, and innovative solutions for creating high-quality web applications. The content covers everything from front-end design with React and Material-UI to back-end development and database management.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=W59Hj8r303M',
  },
  {
    id: 2,
    photo: robot13,
    title: 'Video Title 2',
    price: '2$',
    description:
      'A detailed description for video 2. In this video, we dive deep into the world of JavaScript. We explore advanced concepts such as closures, prototypes, and asynchronous programming. This tutorial is perfect for developers who want to take their skills to the next level and write cleaner, more efficient code. You will see practical examples and real-world use cases that will help you understand these complex topics.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=a_D35I-vXyI',
  },
  {
    id: 3,
    photo: robot7,
    title: 'Video Title 2',
    price: '3$',
    description:
      'A detailed description for video 3. Get ready to build your first full-stack application from scratch! This video provides a step-by-step guide on how to set up a server, connect to a database, and create a dynamic user interface. We use a combination of Node.js, Express, and React to create a powerful and scalable application. This is a must-watch for anyone interested in full-stack development.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=kO6w6y7pWzI',
  },
  {
    id: 4,
    photo: robot6,
    title: 'Quick Preview',
    price: '3.50$',
    description:
      'A detailed description for video 4. This tutorial focuses on CSS Grid and Flexbox. You will learn how to create complex and responsive layouts with ease. We cover everything from basic concepts to advanced techniques, including responsive design and custom grid templates. Say goodbye to outdated layout methods and embrace the future of web design.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=mO93aJ_2X4E',
  },
  {
    id: 5,
    photo: robot4,
    title: 'Quick Preview',
    price: '5.50$',
    description:
      "A detailed description for video 5. Learn how to optimize your website's performance and make it faster. We discuss various techniques, including image optimization, code minification, and caching strategies. A faster website leads to a better user experience and higher search engine rankings. This video will show you how to identify bottlenecks and implement effective solutions.",
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=2d7F7q70L4k',
  },
  {
    id: 6,
    photo: robot9,
    title: 'Video Title 6',
    price: '2.50$',
    description:
      'A detailed description for video 6. This video is a beginner-friendly guide to React hooks. We cover `useState`, `useEffect`, `useContext`, and other essential hooks. You will learn how to manage state and side effects in a functional way, making your code more readable and maintainable. This is an excellent starting point for anyone new to React.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=8UjL9_W6KkI',
  },
  {
    id: 7,
    photo: robot14,
    title: 'Video Title 7',
    price: '7$',
    description:
      'A detailed description for video 7. Explore the world of API design and development. This video covers RESTful principles, API security, and best practices for creating robust and scalable APIs. We show you how to design an API that is easy to use and maintain. This is essential knowledge for any modern web developer.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=t5Xz3wQeU7o',
  },
  {
    id: 8,
    photo: robot11,
    title: 'Video Title 8',
    price: '3.50$',
    description:
      'A detailed description for video 8. This video is a crash course on TypeScript. We cover the basics of static typing, interfaces, and classes. You will learn how to write safer and more predictable code, which is especially important for large-scale projects. TypeScript helps you catch errors early and improves developer experience.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=qY_3Q6q-q-o',
  },
  {
    id: 9,
    photo: robot,
    title: 'Video Title 9',
    price: '4.50$',
    description:
      'A detailed description for video 9. Learn the fundamentals of database design and management. We cover different types of databases, normalization, and SQL queries. Whether you are using a relational or NoSQL database, this video will provide you with the essential knowledge you need to get started.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=9xL_v_R9f_I',
  },
  {
    id: 10,
    photo: robot5,
    title: 'Video Title 10',
    price: '5$',
    description:
      'A detailed description for video 10. This is an advanced tutorial on building a real-time chat application with WebSockets. We cover both the client and server side, including setting up a WebSocket server and handling real-time data flow. This is a great project for learning how to build interactive and dynamic web applications.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=P3-0wQvA8lA',
  },
  {
    id: 11,
    photo: robot12,
    title: 'Video Title 11',
    price: '8$',
    description:
      'A detailed description for video 11. Learn about the best practices for writing clean and maintainable code. We cover topics such as code formatting, naming conventions, and refactoring techniques. Clean code is easier to read, understand, and debug, which is essential for working on a team.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=r-x-kP-l0Fk',
  },
  {
    id: 12,
    photo: robot4,
    title: 'Video Title 12',
    price: '9$',
    description:
      'A detailed description for video 12. This video is an introduction to state management in React. We compare different approaches, including local component state, the Context API, and third-party libraries like Redux. You will learn how to choose the right state management solution for your project.',
    name: 'Quick Preview',
    youtubeLink: 'https://www.youtube.com/watch?v=k-bWf8-1d2A',
  },
];

export default libraryData;
