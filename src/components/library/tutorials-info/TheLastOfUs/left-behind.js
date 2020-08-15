// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Zmp64q2Rk9o';

// COMPONENT DEFINITION
const LeftBehind = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/left-behind.mid"
		sheetRoute="TheLastOfUs/left-behind.pdf"
		title="Left Behind"
		videoUrl={videoUrl}
	/>
);

export default LeftBehind;