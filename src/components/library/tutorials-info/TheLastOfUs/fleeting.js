// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/0BZdZeumGJo';

// COMPONENT DEFINITION
const Fleeting = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/fleeting.mid"
		sheetRoute="TheLastOfUs/fleeting.png"
		title="Fleeting"
		videoUrl={videoUrl}
	/>
);

export default Fleeting;