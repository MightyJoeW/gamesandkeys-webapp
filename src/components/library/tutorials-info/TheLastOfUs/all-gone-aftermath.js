// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/JnzjGqG0WQ4';

// COMPONENT DEFINITION
const AllGoneAftermath = () => (
	<div>
		<TutorialContainer
			title='All Gone (Aftermath)'
			videoUrl={videoUrl}
		/>
	</div>
);

export default AllGoneAftermath;