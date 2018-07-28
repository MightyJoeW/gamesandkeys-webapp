// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/HsMitMHRHos';

// Component Definition
const Infamous = () => (
  <div>
    <TutorialContainer
      title='Second Son'
      videoUrl={videoUrl}
    />
  </div>
)

export default Infamous;