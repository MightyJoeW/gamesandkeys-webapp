// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Vn7H0lGonDw';

// COMPONENT DEFINITION
const BeyondFriend = () => (
	<TutorialWrapper
		midiRoute="BeyondTwoSouls/my-imaginary-friend.mid"
		sheetRoute="BeyondTwoSouls/my-imaginary-friend.pdf"
		title="My Imaginary Friend"
		videoUrl={videoUrl}
	/>
);

export default BeyondFriend;