import React from "react";
import HeaderTsuite from "./Tswipe/Components/HeaderTsuite";
import TsuiteMain from "./Tswipe/Components/TsuiteMain";
import "./resetStyles.scss";

const Tswipe =()=> { window.scrollTo(0,0); return ( <>

<HeaderTsuite/>
<TsuiteMain/>

</> ) }; export default Tswipe;