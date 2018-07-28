// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/spDdgUqgxBo';

// Component Definition
const WhereAreYou = () => (
  <div>
    <TutorialContainer
      title='Where Are You'
      videoUrl={videoUrl}
    />
  </div>
)

export default WhereAreYou;