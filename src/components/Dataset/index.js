import * as i from './importer';
import c from '../../utils/count';

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
    urlPlatzi: "https://platzi.com/p/rroderickk/curso/1759-fundamentos-node/diploma/detalle/",
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

  { 8: c(), token_id: c(), traits: [c], name: "ETM", image_original_url: i.tiempo,
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
    urlGh:"",
  },

  // { 14: c, name: "", image_original_url: i,
  //   id: "",
  //   idENG: "",
  //   urlPlatzi: "",
  //   urlGh:"",
  //   token_id: c(), traits: [c],
  // }, //!<-Horizontal structure

  // { 15: c, token_id: c(), traits: [c], name: "", image_original_url: i,
  //   id: "",
  //   idENG: "",
  //   urlPlatzi: "",
  //   urlGh:"",
  // }, //?<-Vertical structure


],}; export default dataset;