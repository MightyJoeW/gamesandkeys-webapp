// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/Xoaor-shCps';

// Component Definition
const DeadVoxel = () => (
  <div>
    <TutorialContainer
      title='Dead Voxel'
      videoUrl={videoUrl}
    />
  </div>
)

export default DeadVoxel;