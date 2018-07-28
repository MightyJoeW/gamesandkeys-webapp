// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/sb2ZC5WjjrA';

// Component Definition
const TheLastOfUsTheme = () => (
  <div>
    <TutorialContainer
      title="The Last of Us"
      videoUrl={videoUrl}
    />
  </div>
)

export default TheLastOfUsTheme;