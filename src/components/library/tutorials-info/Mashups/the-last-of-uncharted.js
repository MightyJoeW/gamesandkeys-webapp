// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/EfawmKPbi-E';

// COMPONENT DEFINITION
const TheLastOfUncharted = () => (
	<div>
		<TutorialWrapper
			midiRoute="Mashups/the-last-of-uncharted-piano-mashup.mid"
			sheetRoute="Mashups/the-last-of-uncharted-piano-mashup.pdf"
			title='The Last of Uncharted'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheLastOfUncharted;