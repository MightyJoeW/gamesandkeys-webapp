// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/VCKXbo42CZ8';

// COMPONENT DEFINITION
const SmallBeginnings = () => (
	<div>
		<TutorialWrapper
			midiRoute='Uncharted/small-beginnings.mid'
			sheetRoute="Uncharted/small-beginnings.pdf"
			title='Small Beginnings'
			videoUrl={videoUrl}
		/>
	</div>
);

export default SmallBeginnings;