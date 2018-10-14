// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/0BZdZeumGJo';

// COMPONENT DEFINITION
const Fleeting = () => (
	<div>
		<TutorialContainer
			title='Fleeting'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Fleeting;