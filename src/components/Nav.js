import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		fontFamily: 'Bebas Neue, cursive',
		flexGrow: 1,
	},
	appBar: {
		background: 'black',
		color: 'white',
		// borderBottom: '1px solid #651fff',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<Box textAlign="center">
			<AppBar position="static" className={classes.appBar}>
				<Container maxWidth="lg">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" className={classes.title}>
							stream surfer
						</Typography>
						<IconButton
							color="inherit"
							href="https://github.com/oceansf/stream-scroller"
							target="_blank"
						>
							<GitHubIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
