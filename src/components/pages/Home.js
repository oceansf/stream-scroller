import React from 'react';
import StreamPlayer from '../StreamPlayer';
import StreamControls from '../StreamControls';

const Home = ({
	activeStreamUrl,
	activeStreamer,
	getRandomStream,
	getNextStream,
	getPrevStream,
}) => {
	return (
		<React.Fragment>
			<StreamPlayer activeStreamUrl={activeStreamUrl} />
			<StreamControls
				activeStreamUrl={activeStreamUrl}
				activeStreamer={activeStreamer}
				getRandomStream={getRandomStream}
				getNextStream={getNextStream}
				getPrevStream={getPrevStream}
			/>
		</React.Fragment>
	);
};

export default Home;
