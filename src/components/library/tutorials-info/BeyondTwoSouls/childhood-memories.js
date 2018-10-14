// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/-86VZNyIY1s';

// COMPONENT DEFINITION
const BeyondChildhood = () => (
	<div>
		<TutorialContainer
			title='Childhood Memories'
			videoUrl={videoUrl}
		/>
	</div>
);

export default BeyondChildhood;