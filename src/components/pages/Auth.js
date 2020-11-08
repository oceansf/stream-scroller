import React from 'react';

import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';

const authURL = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token`;

const Login = () => {
	return (
		<Card>
			<CardContent align="center">
				<Typography variant="h2">Login to Twitch</Typography>
				<Typography variant="subtitle1">
					Authorize your Twitch account to proceed
				</Typography>
			</CardContent>
			<Box display="flex" justifyContent="center" mb={2}>
				<Button variant="contained" color="primary" size="large" href={authURL}>
					Authorize
				</Button>
			</Box>
		</Card>
	);
};

export default Login;
