import mongoose from 'mongoose';

const connectDb = (urlDb: string) =>
  new Promise((resolve, reject) => {
    mongoose.connect(urlDb, error => {
      if (error) {
        reject(new Error('Error connecting to database'));
      }

      resolve(true);
    });
  });

export default connectDb;
