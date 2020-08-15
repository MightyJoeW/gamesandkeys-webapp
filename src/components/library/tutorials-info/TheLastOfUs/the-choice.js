// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/kq8qR5kmFtM';

// COMPONENT DEFINITION
const TheChoice = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/the-choice.mid"
		sheetRoute="TheLastOfUs/the-choice.pdf"
		title="The Choice"
		videoUrl={videoUrl}
	/>
);

export default TheChoice;