// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HsMitMHRHos';

// COMPONENT DEFINITION
const Infamous = () => (
	<div>
		<TutorialContainer
			title='Second Son'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Infamous;