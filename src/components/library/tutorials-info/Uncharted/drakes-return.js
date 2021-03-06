// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/D41L6sv84NM';

// COMPONENT DEFINITION
const DrakesReturn = () => (
	<div>
		<TutorialWrapper
			midiRoute='Uncharted/drakes-return.mid'
			sheetRoute="Uncharted/drakes-return.pdf"
			title="Drake's Return"
			videoUrl={videoUrl}
		/>
	</div>
);

export default DrakesReturn;