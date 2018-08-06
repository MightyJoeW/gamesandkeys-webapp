// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/ByfsRJbAVWs';

// COMPONENT DEFINITION
const TheWayItWas = () => (
  <div>
    <TutorialContainer
      title='The Way It Was'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheWayItWas;