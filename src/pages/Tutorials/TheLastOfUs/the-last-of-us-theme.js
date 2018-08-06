// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/sb2ZC5WjjrA';

// COMPONENT DEFINITION
const TheLastOfUsTheme = () => (
  <div>
    <TutorialContainer
      title="The Last of Us"
      videoUrl={videoUrl}
    />
  </div>
)

export default TheLastOfUsTheme;