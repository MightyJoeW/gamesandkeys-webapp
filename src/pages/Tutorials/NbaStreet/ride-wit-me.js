// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/ModmUekQRvg';

// Component Definition
const RideWitMe = () => (
  <div>
    <TutorialContainer
      title='Ride Wit Me'
      videoUrl={videoUrl}
    />
  </div>
)

export default RideWitMe;