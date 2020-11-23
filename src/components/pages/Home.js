import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import StreamPlayer from '../StreamPlayer';
import StreamControls from '../StreamControls';
import Auth from '../pages/Auth';
import Games from '../pages/Games';
import { Box } from '@material-ui/core';

const Home = ({
	isAuthorized,
	activeStreamUrl,
	activeStreamer,
	getRandomStream,
	getNextStream,
	getPrevStream,
}) => {
	const [started, setStarted] = useState(false);

	const [mainPage, setMainPage] = useState('');

	useEffect(() => {
		setMainPage('player');
	}, []);

	return (
		<Box height="100vh">
			{isAuthorized ? (
				<>
					<Nav setMainPage={setMainPage} />
					{mainPage === 'player' ? (
						<>
							<StreamPlayer
								activeStreamUrl={activeStreamUrl}
								started={started}
							/>
							<StreamControls
								activeStreamUrl={activeStreamUrl}
								activeStreamer={activeStreamer}
								getRandomStream={getRandomStream}
								getNextStream={getNextStream}
								getPrevStream={getPrevStream}
								started={started}
								setStarted={setStarted}
							/>
						</>
					) : (
						<Games mainPage={mainPage} />
					)}
				</>
			) : (
				<Auth />
			)}
		</Box>
	);
};

export default Home;
