import reacjs from "./react.png";                        import node from "./node.png";
import javascript from "./javascript.png";               import nest from "./nestjs.png";
import pythonProfesional from "./pythonProfesional.png"; import sololearn from "./SoloLearnJavascript.png";
import closures from "./closures.png";                   import poo from "./objetos.png";
import tiempo from "./tiempo.png";                       import py from "./python.png";
import responsive from "./mobilefirst.png"

const dataset = 
{ assets: 
  [{
    0: 0,
    id: "Desarrollar una tienda online con React Llevar un diseño de HTML y CSS a React Crear tu primer sitio web con React.js",
    idENG: "Develop an online store with React Bring HTML and CSS design to React Create your first website with React.js",
    name: "ReactJs", token_id: "0", traits: [0], image_original_url: reacjs,
    urlPlatzi: "https://platzi.com/cursos/react/",
    urlGh: "https://raw.githubusercontent.com/rroderickk/TempCv1/gh-pages/src/components/Dataset/react.png" ,
  },
  {
    1: 1,
    id: "Conocer los conceptos básicos de Node.js, Cómo manejar la asincronía, Entender los módulos del core, Utilizar los módulos y paquetes externos",
    idENG: "Know the basics of Node.js, How to handle asynchrony, Understand core modules, Use external modules and packages",
    name: "NodeJs", token_id: "1", traits: [1], image_original_url: node,
    urlPlatzi: "https://platzi.com/p/rroderickk/curso/1759-fundamentos-node/diploma/detalle/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/node.png?raw=true",
  },
  {
    2: 2,
    id: "Despliega tus proyectos a internet con GitHub Pages. Implementa un flujo de desarrollo web profesional. Conecta JavaScript con HTML",
    idENG: "Deploy your projects to the internet with GitHub Pages. Implement a professional web development flow. Connect JavaScript with HTML",
    name: "Javascript", token_id: "2", traits: [2], image_original_url: javascript,
    urlPlatzi: "https://platzi.com/cursos/javascript-practico/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/javascript.png?raw=true",
  },
  {
    3: 3,
    id: "Estructura y arquitectura de un proyecto backend Programa controladores, servicios y pipes personalizados Construye el CRUD de una API REST",
    idENG: "Structure and architecture of a backend project Program controllers, services and custom pipes Build the CRUD of a REST API",
    name: "NestJs", token_id: "3", traits: [3], image_original_url: nest,
    urlPlatzi: "https://platzi.com/cursos/nestjs/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/nestjs.png?raw=true",
  },
  {
    4: 4,
    id: "iteradores, generadores, decoradores Entenderás qué son los closures y scopes Aplicarás tipado estático en Python",
    idENG: "Iterators and generators, decorators, closures and scopes, static typing in Python",
    name: "Python Professional", token_id: "4", traits: [4], image_original_url: pythonProfesional,
    urlPlatzi: "https://platzi.com/cursos/python-profesional/",
    urlGh: "https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/python.png?raw=true",
  },
  {
    5: 5,
    id: "Describir el concepto de Scope en JS Identificar el uso de Local Scope, Function Scope y Block Scope Describir el concepto de Closure en JavaScript Comprender el concepto de Ámbito Léxico",
    idENG: "Concept of Scope in JS Identify the use of Local Scope, Function Scope and Block Scope, concept of Closure in JavaScript, Lexical Scope",
    name: "Closures", token_id: "5", traits: [5], image_original_url: closures,
    urlPlatzi: "https://platzi.com/cursos/scope/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/closures.png?raw=true",
  },
  {
    6: 6,
    id: "Las características básicas de JavaScript, que incluyen hacer que su sitio web sea más interactivo, cambiar el contenido del sitio web, validar formularios y mucho más.",
    idENG: "Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.",
    name: "JsSoloLearn", token_id: "6", traits: [6], image_original_url: sololearn,
    urlPlatzi: "https://www.sololearn.com/learning/1024",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/SoloLearnJavascript.png?raw=true",
  },
  {
    7: 7,
    id: "Comprende cómo funcionan los objetos en JavaScript. Descubre las ventajas de utilizar POO.  Ordena tu código con abstracción y encapsulamiento.  Reutiliza tu código con herencia y polimorfismo.",
    idENG: "Objects in JavaScript. advantages of using OOP. abstraction and encapsulation. Reuse code with inheritance and polymorphism.",
    name: "OOP", token_id: "7", traits: [7], image_original_url: poo,
    urlPlatzi: "https://platzi.com/cursos/javascript-poo/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/objetos.png?raw=true",
  },
  {
    8: 8,
    id: "Conocer conceptos de la gestión del tiempo Implementar técnicas de gestión del tiempo Profundizar en estrategias de gestión del tiempo Priorizar tareas",
    idENG: "Learn time management concepts Implement time management techniques Delve into time management strategies Prioritize tasks",
    name: "ETM", token_id: "8", traits: [9], image_original_url: tiempo,
    urlPlatzi: "https://platzi.com/cursos/gestion-tiempo/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/tiempo.png?raw=true",
  },
  {
    9: 9,
    id: "Hacer estructuras de datos Crear bucles Conocer herramientas para programar Aprender conceptos básicos de Python",
    idENG: "Make data structures Create loops Learn programming tools Learn Python basics",
    name: "Python", token_id: "9", traits: [9], image_original_url: py,
    urlPlatzi: "https://platzi.com/cursos/python/",
    urlGh:"https://github.com/rroderickk/TempCv1/blob/gh-pages/src/components/Dataset/python.png?raw=true",
  },
  {
    10: 10,
    id: "Crear y aplicar estilos con CSS que se puedan reutilizar Realizar una auditoría con Lighthouse Aplicar media queries para adaptar vistas de dispositivos Analizar la arquitectura de tu proyecto partiendo de un wireframe",
    idENG: "Create and apply reusable CSS styles Perform an audit with Lighthouse Apply media queries to adapt device views Analyze your project architecture from a wireframe",
    name: "Responsive Design", token_id: "10", traits: [10], image_original_url: responsive,
    urlPlatzi: "https://platzi.com/cursos/mobile-first/",
    urlGh:"",
  },
],}; export default dataset;