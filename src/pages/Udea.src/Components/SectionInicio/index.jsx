import React from "react";
import "./index.scss";
import inicio from "../../cabezote-inicio.png";

const SectionInicio =()=> { return ( <>
<div>

<section className="section-inicio">
  <div className="section-inicio--imgContainer">
  </div>
  <div className="section-inicio--videocontainer">
    <iframe className="section-inicio--video" src="https://www.youtube.com/embed/GTTSyA_1FT0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
</section>

</div>

</> ) }; export default SectionInicio;