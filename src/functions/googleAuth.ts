import { createServerFn } from '@tanstack/react-start';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

/* ── Google OAuth Server Action ── */
export const googleLoginFn = createServerFn({ method: 'POST' })
  .validator((data: { code: string }) => data)
  .handler(async ({ data }) => {
    try {
      const clientId = process.env.GOOGLE_CLIENT_ID;
      const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
      const redirectUri = process.env.VITE_APP_URL
        ? `${process.env.VITE_APP_URL}/auth/google/callback`
        : 'http://localhost:8080/auth/google/callback';

      // Exchange code for tokens
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code: data.code,
          client_id: clientId!,
          client_secret: clientSecret!,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        }),
      });

      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.json();
        throw new Error(errorData.error_description || 'Failed to exchange code for token');
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Get user info from Google
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!userInfoResponse.ok) {
        throw new Error('Failed to get user info from Google');
      }

      const googleUser = await userInfoResponse.json();
      const { email, name, id: googleId } = googleUser;

      // Find or create user in MongoDB
      const db = await connectToDatabase();
      let user = await db.collection('users').findOne({ email });

      if (!user) {
        // Create new user with Google OAuth
        const newUser = {
          email,
          name,
          googleId,
          password: null, // No password for Google users
          role: email.toLowerCase().startsWith('admin@') ? 'admin' : 'user',
          createdAt: new Date(),
          cart: [],
          wishlist: [],
        };
        const result = await db.collection('users').insertOne(newUser);
        user = { ...newUser, _id: result.insertedId };
      } else if (!user.googleId) {
        // Link Google account to existing user
        await db.collection('users').updateOne(
          { _id: user._id },
          { $set: { googleId } }
        );
      }

      const userId = user._id instanceof ObjectId ? user._id.toString() : user._id;
      const token = btoa(`${userId}:${Date.now()}`);

      return {
        user: {
          id: userId,
          email: user.email,
          name: user.name,
          role: user.role || 'user',
        },
        token,
      };
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  });
