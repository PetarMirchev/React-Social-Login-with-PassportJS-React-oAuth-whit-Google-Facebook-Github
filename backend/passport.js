// for production use .ENV file!
//https://www.passportjs.org/packages/passport-google-oauth20/

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "113137268524-ffvtv4oa244tbael42idn6igaqaggtlu.apps.googleusercontent.com"; // "your id";
const GOOGLE_CLIENT_SECRET = "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"; // "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);

      // if MONGO_DB is used:
      //   const user = {
      //     username: profile.displayName,
      //     avatar: profile.photos[0],
      //   };
      // user.save(accessToken, refreshToken);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
