import React from "react";

const AutoPlayVideo = ({ src }) => {
	return (
		<video autoPlay muted loop>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	);
};

export default AutoPlayVideo;
