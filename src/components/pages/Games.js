import React, { useEffect, useState } from 'react';
import { fetchGames, fetchStreamsByGame } from '../../API/twitchAPI';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
	bg: {
		background: 'black',
		minHeight: '100%',
		paddingTop: '4rem',
	},
	card: {
		transition: 'all 0.3s ease',
		'&:hover': {
			transform: 'translate(6px, -6px)',
			boxShadow:
				'-1px 1px  #9147ff, -2px 2px  #9147ff, -3px 3px  #9147ff, -4px 4px  #9147ff, -5px 5px  #9147ff, -6px 6px  #9147ff, -7px 7px  #9147ff, -8px 8px  #9147ff',
		},
	},
	cardMedia: {
		background: '#9147ff',
		paddingBottom: '3px',
	},
	cardContent: {
		background: 'black',
		color: 'white',
	},
});

const Games = ({ mainPage }) => {
	const classes = useStyles();
	const [games, setGames] = useState([]);

	useEffect(() => {
		const start = async () => {
			await getGames();
		};
		if (mainPage === 'games') {
			start();
		}
		//eslint-disable-next-line
	}, []);

	const getGames = async () => {
		setGames(await fetchGames());
	};

	const Game = ({ game }) => {
		return (
			<Card className={classes.card}>
				<Box className={classes.cardMedia}>
					<CardActionArea>
						<CardMedia
							component="img"
							title={game.name}
							src={game.box_art_url}
							onClick={() => {
								console.log(fetchStreamsByGame(game.id));
							}}
							className={classes.media}
						/>
					</CardActionArea>
				</Box>
				<CardContent className={classes.cardContent}>
					<Typography variant="h5">{game.name}</Typography>
				</CardContent>
			</Card>
		);
	};

	return (
		<Box textAlign="center" className={classes.bg}>
			<Typography variant="h2" color="primary">
				Categories
			</Typography>
			<Box p={4} className={classes.gridWrapper}>
				<Grid container spacing={2}>
					{games.map((game) => (
						<Grid item md={2} sm={4} xs={12} key={game.id}>
							<Game game={game} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Games;
