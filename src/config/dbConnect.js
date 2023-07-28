import mongoose from "mongoose";

const dbUri = process.env.MONGODB_URI;

const connection = mongoose.connect(dbUri);

connection
  .then(async (db) => {
    console.log(`server ${db}`);
  })
  .catch((err) => console.log(err));

export default connection;
