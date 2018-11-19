// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/V3ddk5KEWeQ';

// COMPONENT DEFINITION
const AllGoneNoEscape = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/all-gone-no-escape.mid"
		sheetRoute="TheLastOfUs/all-gone-no-escape.png"
		title="All Gone (No Escape)"
		videoUrl={videoUrl}
	/>
);

export default AllGoneNoEscape;