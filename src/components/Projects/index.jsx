import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Projects =()=> { return ( <> 

<footer className="footer--container"><h6>Projects Links =()=></h6>
<a className="a--container" href="https://rroderickk.github.io/firstapp1" target="_blank" rel="noreferrer noopener">
  <span className="a--firstapp1" /> 
</a>
<a className="a--container" href="https://rroderickk.github.io/mobilefirst" target="_blank" rel="noreferrer noopener">
  <span className="a--papapabit" /> 
</a>
<a className="a--container" href="https://rroderickk.github.io/reactPractico" target="_blank" rel="noreferrer noopener">
  <span className="a--reactpractico" /> 
</a>
<a className="a--container" href="https://github.com/rroderickk/nodemachine" target="_blank" rel="noreferrer noopener">
  <span className="a--nodemachine"></span> 
</a>
<a className="a--container" href="https://github.com/rroderickk/matrixResolutions" target="_blank" rel="noreferrer noopener">
  <div className="mcontenedor"><span className="a--mresolutions" /></div>
</a>
<a className="a--container" href="https://rroderickk.github.io/professional" target="_blank" rel="noreferrer noopener">
  <div className="cprofessional"><span className="a--professional" /></div>
</a>
<Link className="a--container" to="/udea">
  <div className="cudea"><span className="a--udea" /></div>
</Link>
<Link className="a--container" to="/tsuite">
  <div className="tsuite"><span className="a--tsuite" /></div>
</Link>

</footer>

</> ) }; export default Projects;