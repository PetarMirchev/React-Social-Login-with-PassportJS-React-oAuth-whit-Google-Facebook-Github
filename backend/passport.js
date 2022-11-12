// for production use .ENV file!
//https://www.passportjs.org/packages/passport-google-oauth20/

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "113137268524-ffvtv4oa244tbael42idn6igaqaggtlu.apps.googleusercontent.com"; // "your id";
const GOOGLE_CLIENT_SECRET = "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"; // "your id";

//github
GITHUB_CLIENT_ID = "95e4e6cfb761cf2fab1b"; //"your id";
GITHUB_CLIENT_SECRET = "effd337c564303bb45154464345aaa787a628f5a"; //"your id";

FACEBOOK_APP_ID = "915289342789532"; // "your id";
FACEBOOK_APP_SECRET = "220147700d39e1fc0fffa3bfe4b2d66c"; //"your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
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

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// use to pass session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
