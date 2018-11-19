// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/juBlhF_kp4A';

// COMPONENT DEFINITION
const MuseumBust = () => (
	<div>
		<TutorialWrapper
			midiRoute='Uncharted/museum-bust.mid'
			sheetRoute="Uncharted/museum-bust.png"
			title='Museum Bust'
			videoUrl={videoUrl}
		/>
	</div>
);

export default MuseumBust;