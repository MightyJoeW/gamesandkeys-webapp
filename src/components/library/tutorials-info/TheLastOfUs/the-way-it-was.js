// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

const videoUrl = 'https://www.youtube.com/embed/ByfsRJbAVWs';

// COMPONENT DEFINITION
const TheWayItWas = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/the-way-it-was.mid"
		sheetRoute="TheLastOfUs/the-way-it-was.pdf"
		title="The Way It Was"
		videoUrl={videoUrl}
	/>
);

export default TheWayItWas;