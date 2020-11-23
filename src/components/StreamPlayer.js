import React from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
	arrowDownwardIcon: {
		fontSize: 100,
		position: 'absolute',
		top: '70%',
		color: 'white',
	},
});

const StreamPlayer = ({ activeStreamUrl, started }) => {
	const classes = useStyles();
	const size = useWindowSize();

	return (
		<Container disableGutters>
			<div className={classes.gradientBorder}>
				<Box
					display="flex"
					justifyContent="center"
					textAlign="center"
					className={classes.playerWrapper}
				>
					{started ? null : (
						<>
							<Typography
								variant="h3"
								color="primary"
								className={classes.preStartHeader}
							>
								Click the START button below to begin
							</Typography>
							<ArrowDownwardIcon className={classes.arrowDownwardIcon} />
						</>
					)}

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
			</div>
		</Container>
	);
};

export default StreamPlayer;
