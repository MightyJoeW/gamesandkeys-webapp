// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/xDAtuAotJuo';

// Component Definition
const GrandTheftAuto = () => (
  <div>
    <TutorialContainer
      title='Trailer Theme (Ogdens Nut Gone Flake)'
      videoUrl={videoUrl} />
  </div>
)

export default GrandTheftAuto;