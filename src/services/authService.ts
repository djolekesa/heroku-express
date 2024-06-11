import { auth } from 'express-oauth2-jwt-bearer';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export class AuthService {
  constructor() {}

  getJwtCheck() {
    const authCheck = auth({
      audience: process.env.AUTH_AUDIENCE,
      issuerBaseURL: process.env.AUTH_ISSUER_URL,
      tokenSigningAlg: 'RS256',
    });
    return authCheck;
  }

  async getAccessToken() {
    var options = {
      method: 'POST',
      url: process.env.AUTH_TOKEN_URL,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.AUTH_CLIENT_ID,
        client_secret: process.env.AUTH_CLIENT_SECRET,
        audience: process.env.AUTH_AUDIENCE,
      }),
    };

    const response = await axios.request(options);
    return response.data.access_token;
  }
}
