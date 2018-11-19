// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/VzKSLGtN09I';

// COMPONENT DEFINITION
const Brothers = () => (
	<TutorialWrapper
		midiRoute="Brothers/winged-hope.mid"
		sheetRoute="Brothers/winged-hope.png"
		title="Winged Hope"
		videoUrl={videoUrl}
	/>
);

export default Brothers;
