// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Xoaor-shCps';

// COMPONENT DEFINITION
const DeadVoxel = () => (
	<div>
		<TutorialContainer
			title='Dead Voxel'
			videoUrl={videoUrl}
		/>
	</div>
);

export default DeadVoxel;