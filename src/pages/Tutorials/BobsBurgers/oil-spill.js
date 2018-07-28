// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/0bNEkJ5JBvc';

// Component Definition
const OilSpill = () => (
  <div>
    <TutorialContainer
      title='Oil Spill'
      videoUrl={videoUrl} />
  </div>
)

export default OilSpill;