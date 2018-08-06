// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HnAu8DBAZmk';

// COMPONENT DEFINITION
const Chroma = () => (
  <div>
    <TutorialContainer
      title='Chroma - announce trailer theme'
      videoUrl={videoUrl} />
  </div>
)

export default Chroma;