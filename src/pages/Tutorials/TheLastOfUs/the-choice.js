// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/kq8qR5kmFtM';

// COMPONENT DEFINITION
const TheChoice = () => (
  <div>
    <TutorialContainer
      title='The Choice'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheChoice;