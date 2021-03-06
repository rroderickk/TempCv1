import c from '../../utils/count';
import * as i from './importer';

const dataset = { assets:

  [{ 0: c,  token_id: c(), traits: [c], name: "ReactJs", image_original_url: i.reacjs,
    id: "Desarrollar una tienda online con React Llevar un diseño de HTML y CSS a React Crear tu primer sitio web con React.js",
    idENG: "Develop an online store with React Bring HTML and CSS design to React Create your first website with React.js",
    urlPlatzi: "https://platzi.com/cursos/react/",
    urlGh: "https://raw.githubusercontent.com/rroderickk/TempCv1/gh-pages/src/components/Dataset/react.png" ,
  },

  { 1: c, token_id: c(), traits: [c], name: "NodeJs",image_original_url: i.node,
    id: "Conocer los conceptos básicos de Node.js, Cómo manejar la asincronía, Entender los módulos del core, Utilizar los módulos y paquetes externos",
    idENG: "Know the basics of Node.js, How to handle asynchrony, Understand core modules, Use external modules and packages",
    urlPlatzi: "https://platzi.com/cursos/fundamentos-node/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/node.png?raw=true",
  },

  { 2: c, token_id: c(), traits: [c], name: "Javascript", image_original_url: i.javascript,
    id: "Despliega tus proyectos a internet con GitHub Pages. Implementa un flujo de desarrollo web profesional. Conecta JavaScript con HTML",
    idENG: "Deploy your projects to the internet with GitHub Pages. Implement a professional web development flow. Connect JavaScript with HTML",
    urlPlatzi: "https://platzi.com/cursos/javascript-practico/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/javascript.png?raw=true",
  },

  { 3: c, token_id: c(), traits: [c], name: "NestJs", image_original_url: i.nest,
    id: "Estructura y arquitectura de un proyecto backend Programa controladores, servicios y pipes personalizados Construye el CRUD de una API REST",
    idENG: "Structure and architecture of a backend project Program controllers, services and custom pipes Build the CRUD of a REST API",
    urlPlatzi: "https://platzi.com/cursos/nestjs/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/nestjs.png?raw=true",
  },

  { 4: c, token_id: c(), traits: [c], name: "Python Professional", image_original_url: i.pythonProfesional,
    id: "iteradores, generadores, decoradores Entenderás qué son los closures y scopes Aplicarás tipado estático en Python",
    idENG: "Iterators and generators, decorators, closures and scopes, static typing in Python",
    urlPlatzi: "https://platzi.com/cursos/python-profesional/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/python.png?raw=true",
  },

  { 5: c, token_id: c(), traits: [c], name: "Closures", image_original_url: i.closures,
    id: "Describir el concepto de Scope en JS Identificar el uso de Local Scope, Function Scope y Block Scope Describir el concepto de Closure en JavaScript Comprender el concepto de Ámbito Léxico",
    idENG: "Concept of Scope in JS Identify the use of Local Scope, Function Scope and Block Scope, concept of Closure in JavaScript, Lexical Scope",
    urlPlatzi: "https://platzi.com/cursos/scope/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/closures.png?raw=true",
  },

  { 6: c, token_id: c(), traits: [c], name: "JsSoloLearn", image_original_url: i.sololearn,
    id: "Las características básicas de JavaScript, que incluyen hacer que su sitio web sea más interactivo, cambiar el contenido del sitio web, validar formularios y mucho más.",
    idENG: "Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.",
    urlPlatzi: "https://www.sololearn.com/learning/1024",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/SoloLearnJavascript.png?raw=true",
  },

  { 7: c, token_id: c(), traits: [c], name: "OOP", image_original_url: i.poo,
    id: "Comprende cómo funcionan los objetos en JavaScript. Descubre las ventajas de utilizar POO.  Ordena tu código con abstracción y encapsulamiento.  Reutiliza tu código con herencia y polimorfismo.",
    idENG: "Objects in JavaScript. advantages of using OOP. abstraction and encapsulation. Reuse code with inheritance and polymorphism.",
    urlPlatzi: "https://platzi.com/cursos/javascript-poo/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/objetos.png?raw=true",
  },

  { 8: c, token_id: c(), traits: [c], name: "ETM", image_original_url: i.tiempo,
    id: "Conocer conceptos de la gestión del tiempo Implementar técnicas de gestión del tiempo Profundizar en estrategias de gestión del tiempo Priorizar tareas",
    idENG: "Learn time management concepts Implement time management techniques Delve into time management strategies Prioritize tasks",
    urlPlatzi: "https://platzi.com/cursos/gestion-tiempo/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/tiempo.png?raw=true",
  },

  { 9: c, token_id: c(), traits: [c], name: "Python", image_original_url: i.py,
    id: "Hacer estructuras de datos Crear bucles Conocer herramientas para programar Aprender conceptos básicos de Python",
    idENG: "Make data structures Create loops Learn programming tools Learn Python basics",
    urlPlatzi: "https://platzi.com/cursos/python/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/python.png?raw=true",
  },

  { 10: c, token_id: c(), traits: [c], name: "Responsive Design", image_original_url: i.responsive,
    id: "Crear y aplicar estilos con CSS que se puedan reutilizar Realizar una auditoría con Lighthouse Aplicar media queries para adaptar vistas de dispositivos Analizar la arquitectura de tu proyecto partiendo de un wireframe",
    idENG: "Create and apply reusable CSS styles Perform an audit with Lighthouse Apply media queries to adapt device views Analyze your project architecture from a wireframe",
    urlPlatzi: "https://platzi.com/cursos/mobile-first/",
    urlGh:"",
  },

  { 11: c, token_id: c(), traits: [c], name: "TypeScript", image_original_url: i.typescriptI,
    id: "Superset de Microsoft para agregar tipado fuerte a tu código JavaScript! Conoce los datos primitivos y especiales del lenguaje para programar aplicaciones web, agilizar su mantenimiento y evitar la mayoría de errores. Descubre los fundamentos de TypeScript",
    idENG: "TypeScript Protect your code with strong static typing Integrate libraries with or without TypeScript",
    urlPlatzi: "https://platzi.com/cursos/typescript/",
    urlGh:"",
  },

  { 12: c, token_id: c(), traits: [c], name: "TypeScript Advanced", image_original_url: i.typescriptA,
    id: "Advanced features of TypeScript!, tuples or enums interfaces and complex troubleshooting such as feature overload.",
    idENG: "Advanced features of TypeScript!, tuples or enums interfaces and complex troubleshooting such as feature overload.",
    urlPlatzi: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    urlGh:"",
  },

  { 13: c, token_id: c(), traits: [c], name: "ReactJs 2019", image_original_url: i.reactjs,
    id: "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
    idENG: "Component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
    urlPlatzi: "https://platzi.com/clases/old/react-2019/",
    urlGh: i.reactjs,
  },

  /*
  { 14: c, name: "", image_original_url: i,
    id: "",
    idENG: "",
    urlPlatzi: "",
    urlGh:"",
    token_id: c(), traits: [c],
  }, //!<-Horizontal structure

  { 15: c, token_id: c(), traits: [c], name: "", image_original_url: i,
    id: "",
    idENG: "",
    urlPlatzi: "",
    urlGh:"",
  }, //?<-Vertical structure 
  */

  { 14: c, name: "Algorithmic Complexity", image_original_url: i.complejidad,
    id: "Diferencia del costo temporal y el espacial de cada algoritmo que diseñes. Esto te dará una ventaja en el uso de recursos de cómputo y eficiencia en velocidad dentro de tus programas.",
    idENG: "Difference of the temporal and spatial cost of each algorithm you design. This will give you an advantage in the use of computing resources and speed efficiency within your programs.",
    urlPlatzi: "https://platzi.com/cursos/complejidad-js/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 15: c, name: "React.js: Render and Composition Patterns", image_original_url: i.composicion,
    id: "Compara los React Hooks con otros patrones como Render Props y HOCs Conoce principios de React como la colocación del estado y código aburrido Escribe código saludable con composición de componentes en React",
    idENG: "Compare React Hooks to other patterns like Render Props and HOCs. Learn React principles like state placement and boring code. Write healthy code with component composition in React",
    urlPlatzi: "https://platzi.com/cursos/react-patrones-render/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 15: c, name: "Python Creating a CRUD", image_original_url: i.crud,
    id: "Fundamentos y sintaxis del lenguaje Python 3. Crear un entorno de desarrollo para Python Conocer la sintaxis del lenguaje Aplicar programación orientada a objetos",
    idENG: "Python 3 language fundamentals and syntax Create a development environment for Python Know the syntax of the language Apply object-oriented programming",
    urlPlatzi: "https://platzi.com/cursos/python-practico/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 16: c, name: "Software Engineering Fundamentals", image_original_url: i.ingenieria,
    id: "Conocer la arquitectura de una computadora Entender cómo funciona Internet. Introducirte al mundo de las redes y el cloud. Comprender la industria del software",
    idENG: "Know the architecture of a computer Understand how the Internet works. Introduce you to the world of networks and the cloud. Understand the software industry", 
    urlPlatzi: "https://platzi.com/cursos/ingenieria/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 17: c, name: "Java SE", image_original_url: i.javase,
    id: "Software multiplataforma gracias a la JVM (Máquina Virtual de Java). Conocer a Java como lenguaje de programación Trabajar con Variables en Java Implementar estructuras condicionales Crear funciones usando Java",
    idENG: "Multi-platform software thanks to the JVM (Java Virtual Machine).  Get to know Java as a programming language Working with Variables in Java Implement conditional structures Create functions using Java",
    urlPlatzi: "https://platzi.com/cursos/java-basico/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 18: c, name: "Java SE Object Oriented", image_original_url: i.javaoop,
    id: " Programas orientados a objetos Utilizar herencia y crear objetos Dominar los conceptos de clases, objetos, herencia, abstracción, encapsulamiento y polimorfismo",
    idENG: "Object oriented programs Use inheritance and create objects Master the concepts of classes, objects, inheritance, abstraction, encapsulation, and polymorphism",
    urlPlatzi: "https://platzi.com/cursos/java-oop/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 19: c, name: "Next.js", image_original_url: i.next,
    id: " Client Side Rendering, Server Side Rendering, Generación de Sitios Estáticos (ESG) y hasta despliegues a producción automáticos con Vercel.  Crear Single Page Applications con Next.js Desplegar una webapp a producción Desarrolla APIs con Next.js Renderizar aplicaciones en el servidor, SSR", idENG: " Client Side Rendering, Server Side Rendering, Static Site Generation (ESG) and even automatic production deployments with Vercel.  Create Single Page Applications with Next.js Deploy a webapp to production Develop APIs with Next.js Render applications on the server, SSR",
    urlPlatzi: "https://platzi.com/cursos/next/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 20: c, name: "Next.js Professional", image_original_url: i.profesionalnext,
    id: "Profesionaliza tus conocimientos sobre Next.js consumiendo una API para crear un dashboard de productos. Comunícate con la API para obtener, crear, actualizar y eliminar productos. Integra el sistema de autenticación y usa diferentes tecnologías como Tailwind CSS. ¡Haz el deploy directamente en Vercel y conecta un subdominio a tu dashboard ",
    idENG: " Professionalize your Next.js knowledge by consuming an API to create a product dashboard. Communicate with the API to get, create, update and delete products. It integrates the authentication system and uses different technologies like Tailwind CSS. Deploy directly in Vercel and connect a subdomain to your dashboard!",
    urlPlatzi: "https://platzi.com/cursos/profesional-nextjs/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 21: c, name: "OOP and Algorithms with Python", image_original_url: i.ooppython,
    id: "Adéntrate en el paradigma de Programación Orientada a Objetos. Estructura programas en Python utilizando los conceptos de la Programación Orientada a Objetos. Comprende cómo traducir elementos de tu entorno en elementos de un programa. ",
    idENG: "Delve into the Object Oriented Programming paradigm. Structure Python programs using the concepts of Object Oriented Programming. Understand how to translate elements of your environment into elements of a program.",
    urlPlatzi: "https://platzi.com/cursos/poo-python/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 22: c, name: "Rust: Variables, Loops and Functions", image_original_url: i.rust,
    id: "Aplica lo aprendido creando una calculadora digital y un videojuego de texto.  Aprender a utilizar variables, condicionales y ciclos. Programar estructuras de control y funciones. Manejar paquetes y dependencias con Cargo.  ",
    idENG: "Apply what you have learned by creating a digital calculator and a text video game. Learn to use variables, conditionals and cycles.  Programming control structures and functions. Manage packages and dependencies with Cargo.",
    urlPlatzi: "https://platzi.com/cursos/rust-basico/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 23: c, name: "JavaScript Professional", image_original_url: i.jprofesional,
    id: "Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables. Comprende conceptos avanzados que te permitan plantear mejores soluciones en tu código. Conoce las APIs del DOM y descubre cómo puedes organizar mejor tu código utilizando patrones de diseño.",
    idENG: "Improve your Javascript skills. Get to know Typescript and how you can use it to improve the control of your variables. Understand advanced concepts that allow you to propose better solutions in your code. Get to know the DOM APIs and discover how you can better organize your code using design patterns.",
    urlPlatzi: "https://platzi.com/cursos/javascript-profesional/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 24: c, name: "Get a Job in Technology", image_original_url: i.trabajo,
    id: "El equipo de Professional Growth Experts de Platzi te enseña a definir tu objetivo laboral, desarrollar tu CV y perfil de LinkedIn, prepararte para entrevistas y negociar tu contratación.",
    idENG: "Platzi's Professional Growth Experts team teaches you how to define your job objective, develop your CV and LinkedIn profile, prepare for interviews and negotiate your hiring.", 
    urlPlatzi: "https://platzi.com/cursos/conseguir-trabajo-tech/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  { 25: c, name: "TypeScript: OOP and Async", image_original_url: i.typescriptoop,
    id: "Implementa los pilares de la POO y patrones de diseño como el Singleton. Trabaja con promesas para consumir APIs REST y aplica Generics en tus clases y métodos.",
    idENG: "It implements the pillars of the OOP and design patterns such as the Singleton. Work with promises to consume REST APIs and apply Generics in your classes and methods.",
    urlPlatzi: "https://platzi.com/cursos/typescript-poo/",
    urlGh:"",
    token_id: c(), traits: [c],
  },

  // { 26: c, name: "", image_original_url: i.,
  //   id: "",
  //   idENG: "",
  //   urlPlatzi: "",
  //   urlGh:"",
  //   token_id: c(), traits: [c],
  // },

]}; export default dataset;