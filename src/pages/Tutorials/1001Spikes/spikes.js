// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/hX0L_VG9K68';

// Component Definition
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