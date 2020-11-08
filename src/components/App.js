import React, { useState, useEffect } from 'react';
import { fetchStreams } from '../API/twitchAPI';
import Auth from './pages/Auth';
import Home from './pages/Home';

import { Box, Container, CssBaseline, Typography } from '@material-ui/core';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6034b2',
		},
		secondary: {
			main: '#674b9b',
		},
	},
});

const useStyles = makeStyles({
	root: {
		height: '100vh',
	},
});

const App = () => {
	const classes = useStyles();
	const isAuthorized = document.location.hash;
	const [streamUrls, setStreamUrls] = useState([]);
	const [activeStreamUrl, setActiveStreamUrl] = useState('');
	const activeStreamIndex = streamUrls.indexOf(activeStreamUrl);
	let streamsArr, usernamesArr;

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
		setActiveStreamUrl(
			streamUrls[Math.floor(Math.random() * streamUrls.length)]
		);
	};

	const getNextStream = () => {
		if (activeStreamIndex === streamUrls.length - 1) {
			setActiveStreamUrl(streamUrls[0]);
		} else {
			setActiveStreamUrl(streamUrls[activeStreamIndex + 1]);
		}
	};

	const getPrevStream = () => {
		if (activeStreamIndex === 0) {
			setActiveStreamUrl(streamUrls[streamUrls.length]);
		} else {
			setActiveStreamUrl(streamUrls[activeStreamIndex - 1]);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				style={{
					background: 'black',
				}}
			>
				<CssBaseline />
				<Container maxWidth="xl" disableGutters className={classes.root}>
					<Box style={{ color: 'white' }} textAlign="center" p={2}>
						<Typography variant="h5" style={{ fontWeight: '900' }}>
							stream-discover
						</Typography>
					</Box>
					{document.location.hash ? (
						<Home
							activeStreamUrl={activeStreamUrl}
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
