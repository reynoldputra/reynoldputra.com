import TypescriptLogo from "@/asset/logo/typescript.jsx"
import JavascriptLogo from "@/asset/logo/javascript.jsx"
import CLogo from "@/asset/logo/c.jsx"
import FirebaseLogo from "@/asset/logo/firebase.jsx"
import LaravelLogo from "@/asset/logo/laravel.jsx"
import MongoLogo from "@/asset/logo/mongo.jsx"
import MysqlLogo from "@/asset/logo/mysql.jsx"
import NestLogo from "@/asset/logo/nest.jsx"
import NextLogo from "@/asset/logo/next.jsx"
import PhpLogo from "@/asset/logo/php.jsx"
import ReactLogo from "@/asset/logo/react.jsx"
import VueLogo from "@/asset/logo/vue.jsx"

const data = {
    main : {
      title : "tech • stack",
      desc : "A tech stack is defined as the set of technologies an organization uses to build a web or mobile application. It is a combination of programming languages, frameworks, libraries, patterns, servers, UI/UX solutions, software, and tools used by its developers."
    },
    language : [
      {
        title : "javascript",
        desc : "JavaScript is a programming language that allows developers to create dynamic web content and add interactivity to websites. It is primarily used for client-side web development, which means it runs in a user's web browser and can manipulate the content of a web page in real-time. I usually use this for front end and back end",
        logo : <JavascriptLogo  className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "typescript",
        desc : "TypeScript is a superset of JavaScript that adds optional static typing to the language. It was developed by Microsoft and is now an open-source programming language. TypeScript aims to make it easier to write and maintain large-scale JavaScript applications by providing features such as static typing, classes, interfaces, and modules.",
        logo : <TypescriptLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "c",
        desc : "C is a high-level programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. It was designed as a system programming language for Unix operating system and it gained widespread popularity due to its efficiency, flexibility, and portability. C is a compiled language, meaning that code written in C needs to be converted into machine-readable code before it can be executed. I usually use this for front end and back end in competitive programming",
        logo : <CLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer"/>
      },
      {
        title : "php",
        desc : "PHP code is interpreted by a web server with a PHP processor module, which generates the resulting web page. PHP can be embedded within HTML code or used in standalone scripts. It supports a wide range of databases, including MySQL, PostgreSQL, and SQLite, and has a vast library of functions and extensions to help with common web development tasks.",
        logo : <PhpLogo className="transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      }
    ],
    tool : [
      {
        title : "laravel",
        desc : "Laravel is a free, open-source PHP web framework that follows the Model-View-Controller (MVC) architectural pattern. It provides an elegant syntax and tools needed for building modern, robust web applications. Laravel is highly modular and offers various features like routing, middleware, templating engine, database migration, and more.",
        logo : <LaravelLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "react js",
        desc : "A JavaScript library for building user interfaces. It's popular for its component-based architecture and virtual DOM, which make it easy to build fast and scalable web applications.",
        logo : <ReactLogo className="p-1 mt-1 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "next js",
        desc : "A popular React framework that provides server-side rendering, static site generation, and other useful features out of the box. It's often used for building fast and SEO-friendly web applications.",
        logo : <NextLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "vue js",
        desc : "A JavaScript library for building user interfaces. It's popular for its component-based architecture and virtual DOM, which make it easy to build fast and scalable web applications.",
        logo : <VueLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer" />
      },
      {
        title : "nest js",
        desc : "A TypeScript-based back-end framework for building scalable and maintainable server-side applications. It's built on top of Express and provides a modular architecture and many useful features out of the box.",
        logo : <NestLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer"/>
      },
      {
        title : "mysql",
        desc : "A JavaScript library for building user interfaces. It's popular for its component-based architecture and virtual DOM, which make it easy to build fast and scalable web applications.",
        logo : <MysqlLogo className="p-2 pt-3 transition-all duration-300 svg-stroke change-stroke cursor-pointer"/>
      },
      {
        title : "mongo db",
        desc : "A popular open-source NoSQL document database. It's known for its flexibility, scalability, and ease of use, and is often used in web development for its ability to store and retrieve unstructured data.",
        logo : <MongoLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer"/>
      },
      {
        title : "firebase",
        desc : "A mobile and web application development platform developed by Google. It provides a variety of tools and services for building, deploying, and managing web and mobile applications, including hosting, real-time database, cloud functions, and authentication.",
        logo : <FirebaseLogo className="p-2 transition-all duration-300 svg-stroke change-stroke cursor-pointer"/>
      },

    ]
  }

export default data
