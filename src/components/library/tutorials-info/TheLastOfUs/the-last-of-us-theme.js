// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/sb2ZC5WjjrA';

// COMPONENT DEFINITION
const TheLastOfUsTheme = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/main-theme.mid"
		sheetRoute="TheLastOfUs/main-theme.png"
		title="The Last of Us"
		videoUrl={videoUrl}
	/>
);

export default TheLastOfUsTheme;