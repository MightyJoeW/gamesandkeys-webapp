// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';

// COMPONENT DEFINITION
const VideoPlayer = (props) => {
	const url = props.videoUrl;
	return (
		<Fragment>
			<iframe
				allow="autoplay; encrypted-media"
				allowFullScreen
				frameBorder="0"
				height="360"
				src={url}
				style={{ margin: '0 auto' }}
				title="Game Title"
				width="100%"
			>
			</iframe>
		</Fragment>
	);
};

export default VideoPlayer;

