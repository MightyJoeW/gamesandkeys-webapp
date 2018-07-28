// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/juBlhF_kp4A';

// Component Definition
const MuseumBust = () => (
  <div>
    <TutorialContainer
      title='Museum Bust'
      videoUrl={videoUrl}
    />
  </div>
)

export default MuseumBust;