
var express = require("express");
const cors = require("cors");
require("dotenv").config();

var app = express();

//db
const connectDb = require("./db/connect");

app.use(cors());
app.set("trust proxy", 1);
app.use(express.json());



// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//Routes
const authRouter = require("./routes/auth");
const feedbackRouter = require("./routes/feedback");
const authenticatedUser = require("./middleware/authentication");

app.use("/auth", authRouter);
app.use("/feedback",  feedbackRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDb(
      "mongodb://127.0.0.1:27017/information"
    );
    app.listen(3000, () => console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();












