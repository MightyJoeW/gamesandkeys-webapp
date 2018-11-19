// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ESPJGXs_tDU';

// COMPONENT DEFINITION
const MoogCity2 = () => (
	<TutorialWrapper
		midiRoute="Minecraft/moog-city-2.mid"
		sheetRoute="Minecraft/moog-city-2.png"
		title="Moog City 2"
		videoUrl={videoUrl}
	/>
);

export default MoogCity2;