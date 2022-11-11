const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

//login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Error Login!",
  });
});

// login successful
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Welcome",
      user: req.user,
      cookies: req.cookies,
      // or JWT if is used...
    });
  }
});

//logout & end redirect user to 'http://localhost:3000/'
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// whe are using .get() for call Google auth (if is normal login (whit DB - acc, pass) will be .post())
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//callback function for redirect user after login success to "http://localhost:3000/", if failed go to
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
