import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Container,
	SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
	},
	list: {
		background: 'black',
		color: 'white',
		width: 250,
		height: '100%',
		padding: 0,
	},
	drawerHeader: {
		background: 'black',
	},
	border: {
		padding: '1px 0',
		background: 'linear-gradient(to right, #ff00cc, #333399)',
	},
	twitchBtn: {
		padding: '1rem',
		'&:hover': {
			background: '#6441A4',
		},
	},
	ytBtn: {
		padding: '1rem',
		'&:hover': {
			background: '#FF0000',
		},
	},
	icon: {
		marginRight: '1rem',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const Drawer = () => {
		return (
			<SwipeableDrawer
				open={drawerIsOpen}
				onClose={() => setDrawerIsOpen(false)}
				onOpen={() => setDrawerIsOpen(true)}
			>
				<Box className={classes.border}>
					<Box
						variant="contained"
						textAlign="center"
						disableElevation
						disableFocusRipple
						p={1}
						className={classes.drawerHeader}
					>
						<Typography variant="h5" color="primary" className={classes.title}>
							stream surfer
						</Typography>
					</Box>
				</Box>
				<List
					component="nav"
					aria-label="main mailbox folders"
					className={classes.list}
				>
					<ListItem button className={classes.twitchBtn}>
						<div className={classes.icon}>
							<i className="fab fa-twitch fa-2x" />
						</div>
						<ListItemText primary="Twitch" />
					</ListItem>
					<ListItem button className={classes.ytBtn}>
						<YouTubeIcon fontSize="large" className={classes.icon} />
						<ListItemText primary="YouTube" />
					</ListItem>
				</List>
			</SwipeableDrawer>
		);
	};

	return (
		<Box textAlign="center">
			<Drawer />
			<AppBar position="static" className={classes.appBar}>
				<Container maxWidth="lg">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={() => setDrawerIsOpen(!drawerIsOpen)}
							className={classes.menuButton}
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
