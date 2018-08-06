// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/hX0L_VG9K68';

// COMPONENT DEFINITION
const Spikes = () => (
  <div>
    <TutorialContainer
      pdf="PDF"
      title='1001 Spikes Main Theme'
      videoUrl={videoUrl}
    />
  </div>
)

export default Spikes;