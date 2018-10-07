// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

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