// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/EfawmKPbi-E';

// Component Definition
const TheLastofUncharted = () => (
  <div>
    <TutorialContainer
      title='The Last of Uncharted'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheLastofUncharted;