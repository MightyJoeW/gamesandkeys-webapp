// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Ll8wJKBpZ8o';

// COMPONENT DEFINITION
const BeyondTrailer = () => (
	<div>
		<TutorialContainer
			title='E3 Trailer (End Pinao Theme)'
			videoUrl={videoUrl}
		/>
	</div>
);

export default BeyondTrailer;