// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

const videoUrl = 'https://www.youtube.com/embed/nwcKv152tfs';

// COMPONENT DEFINITION
const VanishingGraceInnocence = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/vanishing-grace-Innocence.mid"
		sheetRoute="TheLastOfUs/vanishing-grace-innocence.pdf"
		title="Vanishing Grace (Innocence)"
		videoUrl={videoUrl}
	/>
);

export default VanishingGraceInnocence;