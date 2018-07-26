// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/ModmUekQRvg';

// Component Definition
const RideWitMe = () => (
  <div>
    <TutorialContainer
      name="Ride Wit Me"
      videoUrl={videoUrl}
    />
  </div>
)

export default RideWitMe;