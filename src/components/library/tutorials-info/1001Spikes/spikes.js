// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/hX0L_VG9K68';

// COMPONENT DEFINITION
const Spikes = () => (
	<TutorialWrapper
		midiRoute='1001Spikes/1001-spikes.mid'
		sheetRoute="1001Spikes/1001-spikes.png"
		title='1001 Spikes Main Theme'
		videoUrl={videoUrl}
	/>
);

export default Spikes;