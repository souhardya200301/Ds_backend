const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose
      .connect("", {
        authSource: "admin",
      })
      .then((conn) => {
        console.log(conn.connection.host);
        console.log("Mongodb Connected Successfully");
      })
      .catch((e) => {
        console.log("Error", e);
        throw new Error(e);
      });
  } catch (e) {
    console.log("Error to connect DB: ", e);
  }
};

module.exports = connectDB;
