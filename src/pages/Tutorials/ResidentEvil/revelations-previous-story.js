// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ivzd0KwpOMU';

// COMPONENT DEFINITION
const PreviousStory = () => (
	<div>
		<TutorialContainer
			title='Previous Story'
			videoUrl={videoUrl}
		/>
	</div>
);

export default PreviousStory;