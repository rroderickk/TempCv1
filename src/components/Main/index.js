import "./Main.scss";
import yo from "@logos/il.jpg";
import linkedin from "@icons/linked.svg";
import github from "@icons/github.svg";
import twitter from "@icons/twitter.svg";
import instagram from "@icons/instagram.svg";
import { UseAnchor } from "@utils/useLinks"
import React, { useState, useEffect } from "react";

const R = {
	rroderickk: "https://github.com/rroderickk",
	linkedin:   "https://www.linkedin.com/in/rodrigo-moreno-rr",
	instagram:  "https://www.instagram.com/rodrigomorenop/",
	cheatmodes: "https://twitter.com/cheatmodes4",
}

const Main =({ selectedPunk, punkListData })=> {
	const [activePunk, setActivePunk] = useState(punkListData[0]);
	useEffect(()=> setActivePunk(punkListData[selectedPunk]),
		[punkListData, selectedPunk]
	);

	return <>
		<section className="main">
			<div className="mainContent">

				<PunkHighlight activePunk={activePunk}/>
				<div className="punkDetail">
					<div className="title"> {activePunk.name} </div>
					<span className="itemNumber">#{activePunk.token_id}</span>
				</div>
				<Owner/>

			</div>
		</section>
	</>
}; export default Main;


const PunkHighlight =({ activePunk })=>
<div className="punkHighlight">
	<UseAnchor c="punkContainer" anchor={activePunk.urlGh ? activePunk.urlGh : null}>
		<img className="selectedPunk" alt="selectedPunk"
			// src="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=s0"
			src={activePunk.image_original_url}
		/>
	</UseAnchor>
</div>


const Owner =()=>
<div className="owner">
	<div className="ownerImageContainer">
		<img src={yo} alt="ownerImageContainer" className="yo"/>
	</div>

	<div className="ownerDetail">
		<div className="ownerNameAndHandle">
			<div className="ownerAdress">Rodrigo Moreno<br/>social media </div>
			<div className="ownerHandle">@CheatModes4</div>
		</div>
		<OwnerSocialContain/>
	</div>
</div>


const OwnerSocialContain =()=>
<div className="ownerSocialContain">
	<UseAnchor c="ownerLink" anchor={R.rroderickk}>
		<img src={github} alt="socialMedia" />
	</UseAnchor>

	<UseAnchor c="ownerLink" anchor={R.linkedin}>
		<img src={linkedin} alt="socialMedia"/>
	</UseAnchor>

	<UseAnchor c="ownerLink" anchor={R.cheatmodes}>
		<img src={twitter} alt="socialMedia"/>
	</UseAnchor>

	<UseAnchor c="ownerLink" anchor={R.instagram}>
		<img src={instagram} alt="socialMedia"/>
	</UseAnchor>
</div>

