import React from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Box, Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	border: {
		padding: '1px 0',
		background: 'linear-gradient(to right, #ff00cc, #333399)',
	},
});

const StreamPlayer = ({ activeStreamUrl }) => {
	const classes = useStyles();
	const size = useWindowSize();

	return (
		<Container disableGutters>
			<Box display="flex" justifyContent="center" className={classes.border}>
				<ReactPlayer
					url={activeStreamUrl}
					playing
					pip
					width={size.width < 1280 ? size.width : 1280}
					height={size.height < 720 ? size.height : 720}
				/>
			</Box>
		</Container>
	);
};

export default StreamPlayer;
