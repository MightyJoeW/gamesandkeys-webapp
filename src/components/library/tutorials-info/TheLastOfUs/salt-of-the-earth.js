// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/C_14Ill5-k8';

// COMPONENT DEFINITION
const SaltOfTheEarth = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/salt-of-the-earth.mid"
		sheetRoute="TheLastOfUs/salt-of-the-earth.pdf"
		title="Salt Of The Earth"
		videoUrl={videoUrl}
	/>
);

export default SaltOfTheEarth;