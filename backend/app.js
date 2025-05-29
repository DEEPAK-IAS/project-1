const express = require("express");
const connect = require("./db/index");
const app = express();
const authRoute = require("./routes/auth.route");
const pageRoute = require("./routes/page.route");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
connect();
dotenv.config();
app.use(express.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/public")))

app.use("/auth", authRoute)
app.use("/page", pageRoute)


app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500  ;
  const message = err.message || "internal server error";
  res.status(statusCode).json({
    message: message
  })
})


app.listen(3000,() => {
  console.log("server running successfully....");
})