// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/B_jnltymaTg';

// COMPONENT DEFINITION
const Beyond = () => (
	<TutorialWrapper
		midiRoute='BeyondTwoSouls/beyond-two-souls-main-theme.mid'
		sheetRoute="BeyondTwoSouls/beyond-two-souls.pdf"
		title='Beyond Two Souls: Main Theme'
		videoUrl={videoUrl}
	/>
);

export default Beyond;
