import axios from 'axios';

export const authURL = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT_REDIRECT_URI}&response_type=token`;

const authURI = document.location.hash;
const authToken = authURI.substring(14, 44);

// Returns an array of stream objects
export const fetchStreams = async () => {
	const result = await axios.get(
		'https://api.twitch.tv/helix/streams?first=100&language=en',
		{
			headers: {
				Authorization: `Bearer ${authToken}`,
				'Client-Id': `${process.env.REACT_APP_CLIENT_ID}`,
			},
		}
	);
	return result.data.data;
};

// Returns an array of game objects
export const fetchGames = async () => {
	const result = await axios.get(
		'https://api.twitch.tv/helix/games/top?first=20',
		{
			headers: {
				Authorization: `Bearer ${authToken}`,
				'Client-Id': `${process.env.REACT_APP_CLIENT_ID}`,
			},
		}
	);
	let dataArray = result.data.data;
	let finalArray = dataArray.map((game) => {
		let newURL = game.box_art_url
			.replace('{width}', '285')
			.replace('{height}', '380');
		game.box_art_url = newURL;
		return game;
	});
	return finalArray;
};

// Returns an array of stream objects
export const fetchStreamsByGame = async (gameID) => {
	const result = await axios.get(
		`https://api.twitch.tv/helix/streams?first=20&language=en&game_id=${gameID}`,
		{
			headers: {
				// Authorization: `Bearer ${authToken}`,
				Authorization: `Bearer yw5nj4fyaaz8is3pv58xgddzv3q3b4`,
				'Client-Id': `${process.env.REACT_APP_CLIENT_ID}`,
			},
		}
	);
	return result.data.data;
};
