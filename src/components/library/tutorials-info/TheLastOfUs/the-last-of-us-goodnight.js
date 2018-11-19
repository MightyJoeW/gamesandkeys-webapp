// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/1bCWBUcuek0';

// COMPONENT DEFINITION
const Goodnight = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/goodnight.mid"
		sheetRoute="TheLastOfUs/goodnight.png"
		title="The Last of Us (Goodnight)"
		videoUrl={videoUrl}
	/>
);

export default Goodnight;