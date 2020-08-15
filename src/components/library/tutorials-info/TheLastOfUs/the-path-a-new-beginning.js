// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/j6X1QR0xgHY';

// COMPONENT DEFINITION
const ThePath = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/the-path-a-new-beginning.mid"
		sheetRoute="TheLastOfUs/the-path-a-new-beginning-chords.pdf"
		sheetRoute2="TheLastOfUs/the-path-a-new-beginning-lead.pdf"
		sheetRoute2Title="lead"
		sheetRoute3="TheLastOfUs/the-path-a-new-beginning-consolidated.pdf"
		sheetRoute3Title="consolidated"
		title="The Path"
		videoUrl={videoUrl}
	/>
);

export default ThePath;