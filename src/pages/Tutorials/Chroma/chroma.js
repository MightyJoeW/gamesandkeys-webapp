// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/HnAu8DBAZmk';

// Component Definition
const Chroma = () => (
  <div>
    <TutorialContainer
      title='Chroma - announce trailer theme'
      videoUrl={videoUrl} />
  </div>
)

export default Chroma;