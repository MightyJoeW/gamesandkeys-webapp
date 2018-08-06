// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/V3ddk5KEWeQ';

// COMPONENT DEFINITION
const AllGoneNoEscape = () => (
  <div>
    <TutorialContainer
      title='All Gone (No Escape)'
      videoUrl={videoUrl}
    />
  </div>
)

export default AllGoneNoEscape;