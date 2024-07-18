import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_JOB_SEEKING_WEBSITE",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to database: ${err}`);
    });
};
