// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/xDAtuAotJuo';

// COMPONENT DEFINITION
const GrandTheftAuto = () => (
	<div>
		<TutorialContainer
			title='Trailer Theme (Ogdens Nut Gone Flake)'
			videoUrl={videoUrl} />
	</div>
);

export default GrandTheftAuto;