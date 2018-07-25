// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/0bNEkJ5JBvc';

// Component Definition
const OilSpill = () => (
  <div>
    <TutorialContainer
      name="Oil Spill"
      videoUrl={videoUrl} />
  </div>
)

export default OilSpill;