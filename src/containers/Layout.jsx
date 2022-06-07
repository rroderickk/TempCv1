import React from "react";
import { FramerMotion } from "../pages/Tswipe/Components/FramerMotion";

import "./Layout.scss";

const Layout =({ children })=>

<FramerMotion>
	<div className="Layout">{children} </div> 
</FramerMotion>

export { Layout };