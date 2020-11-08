import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
					<Toolbar disableGutters>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" className={classes.title}>
							stream-scroller
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
