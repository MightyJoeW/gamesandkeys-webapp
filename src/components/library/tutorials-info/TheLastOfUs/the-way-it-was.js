// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

const videoUrl = 'https://www.youtube.com/embed/ByfsRJbAVWs';

// COMPONENT DEFINITION
const TheWayItWas = () => (
	<div>
		<TutorialContainer
			title='The Way It Was'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheWayItWas;