// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/hX0L_VG9K68';

// Component Definition
const Spikes = (props) => (
  <div>
    <TutorialContainer
      name="1001 Spikes"
      videoUrl={videoUrl}
    />
  </div>
)

export default Spikes;