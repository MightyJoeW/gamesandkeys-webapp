// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ivzd0KwpOMU';

// COMPONENT DEFINITION
const PreviousStory = () => (
	<TutorialWrapper
		midiRoute="ResidentEvil/previous-story.mid"
		sheetRoute="ResidentEvil/previous-story.pdf"
		title="Previous Story"
		videoUrl={videoUrl}
	/>
);

export default PreviousStory;