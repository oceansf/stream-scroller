import React, { useState } from 'react';

import { Box, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'black',
	},
});

const StreamControls = ({
	activeStreamer,
	getRandomStream,
	getNextStream,
	getPrevStream,
}) => {
	const classes = useStyles();
	const [started, setStarted] = useState(false);

	return (
		<Box
			display="flex"
			justifyContent="center"
			pt={2}
			pb={2}
			className={classes.root}
		>
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
			<Button
				variant="contained"
				color="secondary"
				target="popup"
				onClick={() =>
					window.open(
						`https://www.twitch.tv/popout/${activeStreamer}/chat?popout=`,
						'name',
						'width=400,height=599'
					)
				}
			>
				Chat
			</Button>
		</Box>
	);
};

export default StreamControls;
