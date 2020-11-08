import React, { useState } from 'react';
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
		playerWrapper: {
			position: 'relative',
			backgroundColor: 'black',
		},
		preStartHeader: {
			position: 'absolute',
			top: '40%',
		},
	});
	const classes = useStyles();
	const size = useWindowSize();
	const [playing, setPlaying] = useState(false);

	return (
		<Container disableGutters>
			<div className={classes.gradientBorder}>
				<Box
					display="flex"
					justifyContent="center"
					textAlign="center"
					className={classes.playerWrapper}
				>
					{playing ? null : (
						<Typography
							variant="h2"
							color="primary"
							className={classes.preStartHeader}
						>
							Click START to begin
						</Typography>
					)}

					<ReactPlayer
						url={activeStreamUrl}
						playing
						onStart={() => setPlaying(true)}
						pip
						width={size.width < 1280 ? size.width : 1280}
						height={size.height < 720 ? size.height : 720}
						onError={() => document.location.reload()}
						wrapper="div"
					/>
				</Box>
			</div>
		</Container>
	);
};

export default StreamPlayer;
