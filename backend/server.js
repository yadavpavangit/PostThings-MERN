require("dotenv").config();
const { connect } = require("mongoose");
const app = require("./src/app");
const connectDB = require("./src/db/db.connect");

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
  });
});
