import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		backgroundColor: 'black',
		width: '100%',
	},
	showChatBtn: {
		borderRadius: 0,
		padding: '1rem',
	},
	chatWrapper: {
		background: '#18181b',
	},
});

const StreamControls = ({
	activeStreamer,
	getRandomStream,
	getNextStream,
	getPrevStream,
	started,
	setStarted,
}) => {
	const classes = useStyles();
	const size = useWindowSize();
	const [chatOpen, setChatOpen] = useState(false);

	const popoutChat = () => {
		window.open(
			`https://www.twitch.tv/popout/${activeStreamer}/chat?popout=`,
			'name',
			'width=400,height=599'
		);
	};

	return (
		<React.Fragment>
			<Box
				display="flex"
				justifyContent="space-evenly"
				alignItems="center"
				pt={2}
				pb={2}
				className={classes.root}
			>
				{size.width < 500 ? null : (
					<Typography
						color="primary"
						variant="h6"
					>{`${activeStreamer}`}</Typography>
				)}
				<ButtonGroup size="large" color="primary" variant="text">
					<Button
						disabled={!started ? true : false}
						onClick={() => getPrevStream()}
					>
						<ArrowBackIcon />
						Prev
					</Button>
					<Button
						onClick={() => {
							setStarted(true);
							getRandomStream();
						}}
						className={classes.randomBtn}
					>
						{started ? 'Random' : 'Start'}
					</Button>
					<Button
						disabled={!started ? true : false}
						onClick={() => getNextStream()}
					>
						Next
						<ArrowForwardIcon />
					</Button>
				</ButtonGroup>
				{size.width < 500 ? null : (
					<Button
						variant="contained"
						color="secondary"
						disabled={!started ? true : false}
						target="popup"
						onClick={() => {
							size.width > 1800 ? popoutChat() : setChatOpen(!chatOpen);
						}}
					>
						Chat
					</Button>
				)}
			</Box>
			{size.width < 500 && started ? (
				<Button
					variant="contained"
					fullWidth
					color="secondary"
					onClick={() => setChatOpen(!chatOpen)}
					className={classes.showChatBtn}
				>
					{chatOpen ? 'Hide chat' : 'Show chat'}
				</Button>
			) : null}
			{started && chatOpen ? (
				<Box
					pl={size.width > 1000 ? 20 : 0}
					pr={size.width > 1000 ? 20 : 0}
					className={classes.chatWrapper}
				>
					<iframe
						frameBorder="0"
						scrolling="no"
						id="chat_embed"
						src={`https://www.twitch.tv/embed/${activeStreamer}/chat?parent=${process.env.REACT_APP_CLIENT_CHAT_URI}&darkpopout`}
						height="500"
						width="100%"
						title={`${activeStreamer}`}
					/>
				</Box>
			) : null}
		</React.Fragment>
	);
};

export default StreamControls;
