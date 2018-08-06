// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/xF0gICE1Vcg';

// COMPONENT DEFINITION
const PerfectDay = () => (
  <div>
    <TutorialContainer
      title='Perfect Day'
      videoUrl={videoUrl}
    />
  </div>
)

export default PerfectDay;