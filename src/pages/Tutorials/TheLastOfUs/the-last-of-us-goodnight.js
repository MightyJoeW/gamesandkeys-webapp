// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/1bCWBUcuek0';

// Component Definition
const Goodnight = () => (
  <div>
    <TutorialContainer
      title='The Last of Us (Goodnight)'
      videoUrl={videoUrl}
    />
  </div>
)

export default Goodnight;