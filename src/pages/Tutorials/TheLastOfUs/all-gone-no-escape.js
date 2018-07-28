// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/V3ddk5KEWeQ';

// Component Definition
const AllGoneNoEscape = () => (
  <div>
    <TutorialContainer
      title='All Gone (No Escape)'
      videoUrl={videoUrl}
    />
  </div>
)

export default AllGoneNoEscape;