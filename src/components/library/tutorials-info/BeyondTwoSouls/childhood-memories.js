// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/-86VZNyIY1s';

// COMPONENT DEFINITION
const BeyondChildhood = () => (
	<TutorialWrapper
		midiRoute="BeyondTwoSouls/childhood-memories.mid"
		sheetRoute="BeyondTwoSouls/childhood-memories.pdf"
		title='Childhood Memories'
		videoUrl={videoUrl}
	/>
);

export default BeyondChildhood;