// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/zfYB0tzjOyk';

// COMPONENT DEFINITION
const StraySheep = () => (
	<TutorialWrapper
		midiRoute="Catherine/stray-sheep.mid"
		sheetRoute="Catherine/stray-sheep.pdf"
		title="Stray Sheep"
		videoUrl={videoUrl} />
);

export default StraySheep;