// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/T92IROWXd4w';

// COMPONENT DEFINITION
const Ki = () => (
	<TutorialWrapper
		midiRoute="Minecraft/ki.mid"
		sheetRoute="Minecraft/ki.png"
		title="Ki"
		videoUrl={videoUrl}
	/>
);

export default Ki;