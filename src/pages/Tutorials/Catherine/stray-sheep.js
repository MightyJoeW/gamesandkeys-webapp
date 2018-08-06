// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/zfYB0tzjOyk';

// COMPONENT DEFINITION
const StraySheep = () => (
  <div>
    <TutorialContainer
      title='Stray Sheep'
      videoUrl={videoUrl} />
  </div>
)

export default StraySheep;