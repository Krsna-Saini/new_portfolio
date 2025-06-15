/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://portfolio:BdCYEQ9lhjNbRPeN@cluster0.q5h1unz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose;

if (!cached) {
  (global as any).mongoose = { conn: null, promise: null };
  cached = (global as any).mongoose;
}

export const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};