import React from 'react';
import { Link 	 	 } from 'react-router-dom';
import { UseAnchor } from '@utils/useLinks';
import './index.scss';

const R = {
	firstapp: 					'https://rroderickk.github.io/firstapp1',
	mobilefirst: 				'https://rroderickk.github.io/mobilefirst',
	nodemachine: 				'https://github.com/rroderickk/nodemachine',
	professional: 			'https://rroderickk.github.io/professional',
	platzibadges: 			'https://rroderickk.github.io/platzibadges',
	reactPractico: 			'https://rroderickk.github.io/reactPractico',
	matrixResolutions:  'https://github.com/rroderickk/matrixResolutions',
};

const Projects =()=> <>

	<footer className='footer--container'><h6>Projects Links =()={'>'}</h6>

	<UseAnchor c='a--container' anchor={R.firstapp}>
		<span className='a--firstapp1'/>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.mobilefirst}>
		<span className='a--papapabit'/>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.reactPractico}>
		<span className='a--reactpractico'/>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.nodemachine}>
		<span className='a--nodemachine'></span>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.matrixResolutions}>
		<div className='mcontenedor'><span className='a--mresolutions'/></div>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.professional}>
		<div className='cprofessional'><span className='a--professional'/></div>
	</UseAnchor>

	<UseAnchor c='a--container' anchor={R.platzibadges}>
		<div className='cudea'><span className='a--udea' /></div>
	</UseAnchor>

	<Link className='a--container' to='/tsuite'>
		<div className='tsuite'><span className='a--tsuite'/></div>
	</Link>

</footer>

</>; export default Projects;