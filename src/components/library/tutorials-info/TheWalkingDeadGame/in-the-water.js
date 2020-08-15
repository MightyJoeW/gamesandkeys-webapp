// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/tRM6Wvf6HTw';

// COMPONENT DEFINITION
const InTheWater = () => (
	<TutorialWrapper
		midiRoute="TheWalkingDeadGame/in-the-water-clementine-remix.mid"
		sheetRoute="TheWalkingDeadGame/in-the-water-clementine-remix.pdf"
		title='The Walking Dead Season 2 - reveal trailer theme (In The Water by Anadel)'
		videoUrl={videoUrl}
	/>
);

export default InTheWater;