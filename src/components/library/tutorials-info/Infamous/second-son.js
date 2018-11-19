// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HsMitMHRHos';

// COMPONENT DEFINITION
const Infamous = () => (
	<TutorialWrapper
		midiRoute="Infamous/inFAMOUS-second-son-E3-trailer-theme.mid"
		sheetRoute="Infamous/inFAMOUS-second-son-E3-trailer-theme.png"
		title="Second Son"
		videoUrl={videoUrl}
	/>
);

export default Infamous;