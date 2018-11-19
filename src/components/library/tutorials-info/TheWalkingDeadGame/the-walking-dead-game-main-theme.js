// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Y5gpXe4WV7k';

// COMPONENT DEFINITION
const TheWalkingDead = () => (
	<TutorialWrapper
		midiRoute="TheWalkingDeadGame/the-walking-dead-game-main-theme.mid"
		sheetRoute=""
		title='The Walking Dead Game - Main Theme'
		videoUrl={videoUrl}
	/>
);

export default TheWalkingDead;