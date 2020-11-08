import React, { useState, useEffect } from 'react';
import { fetchStreams } from '../API/twitchAPI';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Nav from './Nav';

import { Box, Container, CssBaseline } from '@material-ui/core';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		secondary: {
			main: '#6200ea',
		},
	},
});

const useStyles = makeStyles({
	root: {
		height: '100vh',
	},
	bg: {
		background: '#000000',
	},
});

const App = () => {
	const classes = useStyles();
	const isAuthorized = document.location.hash;
	const [streamUrls, setStreamUrls] = useState([]);
	const [activeStreamUrl, setActiveStreamUrl] = useState('');
	const [activeStreamer, setActiveStreamer] = useState('');
	const activeStreamIndex = streamUrls.indexOf(activeStreamUrl);
	let streamsArr, usernamesArr;
	const date = new Date();

	useEffect(() => {
		const start = async () => {
			await getStreamUrls();
		};
		start();
		//eslint-disable-next-line
	}, []);

	const getStreamUrls = async () => {
		if (isAuthorized.length > 0) {
			streamsArr = await fetchStreams();
			usernamesArr = streamsArr.map((stream) => stream.user_name);
			setStreamUrls(
				usernamesArr.map((username) => `https://www.twitch.tv/${username}`)
			);
		}
	};

	const getRandomStream = () => {
		const randomIndex = Math.floor(Math.random() * streamUrls.length);
		setActiveStreamUrl(streamUrls[randomIndex]);
		setActiveStreamer(streamUrls[randomIndex].slice(22));
	};

	const getNextStream = () => {
		if (activeStreamIndex === streamUrls.length - 1) {
			setActiveStreamUrl(streamUrls[0]);
			setActiveStreamer(streamUrls[0]);
		} else {
			setActiveStreamUrl(streamUrls[activeStreamIndex + 1]);
			setActiveStreamer(streamUrls[activeStreamIndex + 1].slice(22));
		}
	};

	const getPrevStream = () => {
		if (activeStreamIndex === 0) {
			setActiveStreamUrl(streamUrls[streamUrls.length - 1]);
			setActiveStreamer(streamUrls[streamUrls.length - 1].slice(22));
		} else {
			setActiveStreamUrl(streamUrls[activeStreamIndex - 1]);
			setActiveStreamer(streamUrls[activeStreamIndex - 1].slice(22));
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.bg}>
				<CssBaseline />
				<Container maxWidth="xl" disableGutters className={classes.root}>
					<Nav />
					{isAuthorized ? (
						<Home
							activeStreamUrl={activeStreamUrl}
							activeStreamer={activeStreamer}
							getRandomStream={getRandomStream}
							getNextStream={getNextStream}
							getPrevStream={getPrevStream}
						/>
					) : (
						<Auth />
					)}
				</Container>
			</Box>
		</ThemeProvider>
	);
};

export default App;
