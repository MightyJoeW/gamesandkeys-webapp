// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Ll8wJKBpZ8o';

// COMPONENT DEFINITION
const BeyondTrailer = () => (
	<TutorialWrapper
		midiRoute="BeyondTwoSouls/E3-ending-heme.mid"
		sheetRoute="BeyondTwoSouls/beyond-two-souls-trailer.pdf"
		title='E3 Trailer (End Piano Theme)'
		videoUrl={videoUrl}
	/>
);

export default BeyondTrailer;