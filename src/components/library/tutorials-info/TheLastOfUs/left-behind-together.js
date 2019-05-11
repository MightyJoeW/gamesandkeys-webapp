// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Zlx37MUbq9E';

// COMPONENT DEFINITION
const LeftBehindTogether = () => (
	<div>
		<TutorialWrapper
			midiRoute="TheLastOfUs/left-behind-together.mid"
			sheetRoute="TheLastOfUs/left-behind-together.png"
			title="Left Behind (Together)"
			videoUrl={videoUrl}
		/>
	</div>
);

export default LeftBehindTogether;