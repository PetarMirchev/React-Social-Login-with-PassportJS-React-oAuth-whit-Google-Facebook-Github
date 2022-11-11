// npm install express
// npm install passport
// npm install cors
// npm install nodemon
// npm install cookie-session
// npm install passport-google-oauth20

const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

//cookie whit 1 dаy life
app.use(
  cookieSession({ name: "session", keys: ["pepi"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running! on port:5000");
});

//45.36
