// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/1bCWBUcuek0';

// COMPONENT DEFINITION
const Goodnight = () => (
  <div>
    <TutorialContainer
      title='The Last of Us (Goodnight)'
      videoUrl={videoUrl}
    />
  </div>
)

export default Goodnight;