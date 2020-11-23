import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchStreams } from '../API/twitchAPI';
import Home from './pages/Home';

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
		height: `${window.innerHeight}`,
	},
	bg: {
		minHeight: '100%',
		background: '#000000',
	},
});

const App = () => {
	const classes = useStyles();
	const isAuthorized = document.location.hash;
	const [streams, setStreams] = useState([]);
	// Everything comes from here....
	const [streamUrls, setStreamUrls] = useState([]);
	const [activeStreamUrl, setActiveStreamUrl] = useState('');
	const [activeStreamer, setActiveStreamer] = useState('');
	const activeStreamIndex = streamUrls.indexOf(activeStreamUrl);

	useEffect(() => {
		const start = async () => {
			await getStreamUrls();
		};
		start();
		//eslint-disable-next-line
	}, []);

	const getStreamUrls = async () => {
		let streamsArr, usernamesArr;
		if (isAuthorized.length > 0) {
			streamsArr = await fetchStreams();
			setStreams(streamsArr);
			usernamesArr = streamsArr.map((stream) => stream.user_name);
			formatToURL(usernamesArr);
		}
	};

	const formatToURL = (array) => {
		setStreamUrls(array.map((username) => `https://www.twitch.tv/${username}`));
	};

	// Player controls -------------------------------------------------------
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
					<Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Home
										isAuthorized={isAuthorized}
										activeStreamUrl={activeStreamUrl}
										activeStreamer={activeStreamer}
										getRandomStream={getRandomStream}
										getNextStream={getNextStream}
										getPrevStream={getPrevStream}
									/>
								)}
							/>
						</Switch>
					</Router>
				</Container>
			</Box>
		</ThemeProvider>
	);
};

export default App;
