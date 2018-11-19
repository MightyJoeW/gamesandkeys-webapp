// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/DCiy7CiR8UU';

// COMPONENT DEFINITION
const Home = () => (
	<TutorialWrapper
		midiRoute="TheLastOfUs/home.mid"
		sheetRoute="TheLastOfUs/home.png"
		title="Home"
		videoUrl={videoUrl}
	/>
);

export default Home;