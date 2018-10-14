// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Zlx37MUbq9E';

// COMPONENT DEFINITION
const LeftBehindTogether = () => (
	<div>
		<TutorialContainer
			title='Left Behind (Together)'
			videoUrl={videoUrl}
		/>
	</div>
);

export default LeftBehindTogether;