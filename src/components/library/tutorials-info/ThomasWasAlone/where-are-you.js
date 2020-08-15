// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/spDdgUqgxBo';

// COMPONENT DEFINITION
const WhereAreYou = () => (
	<div>
		<TutorialWrapper
			midiRoute='ThomasWasAlone/where-are-you.mid'
			sheetRoute="ThomasWasAlone/where-are-you.pdf"
			title='Where Are You'
			videoUrl={videoUrl}
		/>
	</div>
);

export default WhereAreYou;