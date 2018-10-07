// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/EfawmKPbi-E';

// COMPONENT DEFINITION
const TheLastofUncharted = () => (
	<div>
		<TutorialContainer
			title='The Last of Uncharted'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheLastofUncharted;