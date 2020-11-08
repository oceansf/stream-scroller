import React from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Box } from '@material-ui/core';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
	border: {
		padding: '4px 0',
		background: 'linear-gradient(to right, #ff00cc, #333399)',
	},
});

const StreamPlayer = ({ activeStreamUrl }) => {
	const classes = useStyles();
	const size = useWindowSize();

	return (
		<Box display="flex" justifyContent="center">
			<div className={classes.border}>
				<ReactPlayer
					url={activeStreamUrl}
					playing
					pip
					width={size.width}
					height={size.height * 0.75}
				/>
			</div>
		</Box>
	);
};

export default StreamPlayer;
