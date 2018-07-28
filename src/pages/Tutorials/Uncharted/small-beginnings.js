// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/VCKXbo42CZ8';

// Component Definition
const SmallBeginnings = () => (
  <div>
    <TutorialContainer
      title='Small Beginnings'
      videoUrl={videoUrl}
    />
  </div>
)

export default SmallBeginnings;