import React from 'react';
import StreamPlayer from '../StreamPlayer';
import StreamControls from '../StreamControls';

const Home = ({
	activeStreamUrl,
	getRandomStream,
	getNextStream,
	getPrevStream,
}) => {
	return (
		<React.Fragment>
			<StreamPlayer activeStreamUrl={activeStreamUrl} />
			<StreamControls
				getRandomStream={getRandomStream}
				getNextStream={getNextStream}
				getPrevStream={getPrevStream}
			/>
		</React.Fragment>
	);
};

export default Home;
