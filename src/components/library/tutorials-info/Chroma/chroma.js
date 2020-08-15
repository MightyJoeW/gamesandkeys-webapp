// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HnAu8DBAZmk';

// COMPONENT DEFINITION
const Chroma = () => (
	<TutorialWrapper
		midiRoute="Chroma/chroma-announce-trailer.mid"
		sheetRoute="Chroma/chroma-announce-trailer.pdf"
		title="Chroma - announce trailer theme"
		videoUrl={videoUrl} />
);

export default Chroma;