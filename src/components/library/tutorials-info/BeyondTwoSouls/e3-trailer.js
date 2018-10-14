// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Ll8wJKBpZ8o';

// COMPONENT DEFINITION
const BeyondTrailer = () => (
	<div>
		<TutorialContainer
			title='E3 Trailer (End Piano Theme)'
			videoUrl={videoUrl}
		/>
	</div>
);

export default BeyondTrailer;