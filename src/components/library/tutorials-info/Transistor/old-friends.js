// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Hr8Xs0AlLdI';

// COMPONENT DEFINITION
const OldFriends = () => (
	<div>
		<TutorialWrapper
			midiRoute='Transistor/old-friend.mid'
			sheetRoute="Transistor/old-friend.png"
			title='Old Friends'
			videoUrl={videoUrl}
		/>
	</div>
);

export default OldFriends;