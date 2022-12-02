import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const { DATABASE_URL } = process.env;

export const connectDb = async () => {
  try {
    console.log('Database connection initiated...');
    await connect(DATABASE_URL);
    console.log('Database connection successful.');
  } catch (e) {
    console.log(`Database connection failed. Reason: ${(e as Error).message}.`);
  }
};
