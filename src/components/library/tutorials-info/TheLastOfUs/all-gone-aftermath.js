// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/JnzjGqG0WQ4';

// COMPONENT DEFINITION
const AllGoneAftermath = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/all-gone-aftermath.mid"
		sheetRoute="TheLastOfUs/all-gone-aftermath.pdf"
		title="All Gone (Aftermath)"
		videoUrl={videoUrl}
	/>
);

export default AllGoneAftermath;