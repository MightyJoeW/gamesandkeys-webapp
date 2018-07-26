// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/HnAu8DBAZmk';

// Component Definition
const Chroma = () => (
  <div>
    <TutorialContainer
      name="Chroma - announce trailer theme"
      videoUrl={videoUrl} />
  </div>
)

export default Chroma;