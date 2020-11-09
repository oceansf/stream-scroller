import axios from 'axios';

export const authURL = `https://id.twitch.tv/oauth2/authorize?client_id=c7dav85rh66sf1oxxiipu41acyatil&redirect_uri=https://practical-villani-7ae8dc.netlify.app&response_type=token`;

export const fetchStreams = async () => {
  const authURI = document.location.hash;
  const authToken = authURI.substring(14, 44);
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
