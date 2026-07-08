import { connectToDatabase } from './mongodb';
import { ObjectId } from 'mongodb';

export async function loginAction(email: string, password: string) {
  try {
    const db = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return { error: 'Invalid credentials' };
    }

    if (user.password !== password) {
      return { error: 'Invalid credentials' };
    }

    const userId = user._id instanceof ObjectId ? user._id.toString() : user._id;
    const token = btoa(`${userId}:${Date.now()}`);

    return { user: { id: userId, email: user.email, name: user.name }, token };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Internal server error' };
  }
}

export async function registerAction(email: string, password: string, name: string) {
  try {
    const db = await connectToDatabase();
    const existingUser = await db.collection('users').findOne({ email });
    
    if (existingUser) {
      return { error: 'User already exists' };
    }

    const user = {
      email,
      password,
      name,
      createdAt: new Date(),
      cart: [],
      wishlist: [],
    };

    const result = await db.collection('users').insertOne(user);

    const userId = result.insertedId instanceof ObjectId ? result.insertedId.toString() : result.insertedId;
    const token = btoa(`${userId}:${Date.now()}`);

    return {
      user: { id: userId, email: user.email, name: user.name },
      token,
    };
  } catch (error) {
    console.error('Register error:', error);
    return { error: 'Internal server error' };
  }
}
