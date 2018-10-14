// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Y5gpXe4WV7k';

// COMPONENT DEFINITION
const TheWalkingDead = () => (
	<div>
		<TutorialContainer
			title='The Walking Dead Game - Main Theme'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheWalkingDead;