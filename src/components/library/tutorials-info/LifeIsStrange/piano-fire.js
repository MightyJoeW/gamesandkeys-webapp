// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/kPzFk_mytr0';

// COMPONENT DEFINITION
const PianoFire = () => (
	<TutorialWrapper
		midiRoute="LifeIsStrange/piano-fire.mid"
		sheetRoute="LifeIsStrange/piano-fire.pdf"
		title="Piano Fire"
		videoUrl={videoUrl}
	/>
);

export default PianoFire;