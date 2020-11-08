import React from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const StreamPlayer = ({ activeStreamUrl }) => {
	const useStyles = makeStyles({
		gradientBorder: {
			padding: '1px 0',
			background: 'linear-gradient(to right, #ff00cc, #333399)',
		},
	});
	const classes = useStyles();
	const size = useWindowSize();

	return (
		<Container disableGutters>
			<Box
				display="flex"
				justifyContent="center"
				textAlign="center"
				className={classes.gradientBorder}
			>
				<ReactPlayer
					url={activeStreamUrl}
					playing
					pip
					width={size.width < 1280 ? size.width : 1280}
					height={size.height < 720 ? size.height : 720}
					onError={() => document.location.reload()}
					wrapper="div"
				/>
			</Box>
		</Container>
	);
};

export default StreamPlayer;
