// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/0bNEkJ5JBvc';

// COMPONENT DEFINITION
const OilSpill = () => (
  <div>
    <TutorialContainer
      title='Oil Spill'
      videoUrl={videoUrl} />
  </div>
)

export default OilSpill;