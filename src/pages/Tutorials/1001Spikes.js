// External Dependencies
import React from 'react';

// Internal Dependencies
import Dialog from '../../components/Shared/Tutorials/Dialog';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const videoUrl = 'https://www.youtube.com/embed/hX0L_VG9K68';

// Component Definition
const Spikes = (props) => (
  <div>
    <p>1001 Spikes</p>
    <VideoPlayer videoUrl={videoUrl} />
    <Dialog />
  </div>
)

export default Spikes;