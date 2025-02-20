import axios from 'axios';

export const handleGoogleLogin = () => {
  const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
  const REDIRECT_URI = 'http://localhost:3000/auth/callback';
  const SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=code&access_type=offline&prompt=consent`;
  window.location.href = authUrl;
};

export const exchangeCodeForToken = async (code: string) => {
  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      client_secret: 'YOUR_GOOGLE_CLIENT_SECRET',
      redirect_uri: 'http://localhost:3000/auth/callback',
      grant_type: 'authorization_code',
    });

    const { access_token } = response.data;

    // Fetch user info using the access token
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    console.log('User Info:', userInfoResponse.data);
  } catch (error) {
    console.error('Error exchanging code for token:', error);
  }
};