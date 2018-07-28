// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/ByfsRJbAVWs';

// Component Definition
const TheWayItWas = () => (
  <div>
    <TutorialContainer
      title='The Way It Was'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheWayItWas;