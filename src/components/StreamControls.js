import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

import { Box, Button, ButtonGroup, Container, Typography } from '@material-ui/core';
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
	const size = useWindowSize();

	return (
		<Container>
			<Box
				display="flex"
				justifyContent="space-around"
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
				)}
			</Box>
		</Container>
	);
};

export default StreamControls;
