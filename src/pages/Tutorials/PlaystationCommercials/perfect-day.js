// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/xF0gICE1Vcg';

// Component Definition
const PerfectDay = () => (
  <div>
    <TutorialContainer
      title='Perfect Day'
      videoUrl={videoUrl}
    />
  </div>
)

export default PerfectDay;