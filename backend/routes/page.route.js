const router = require("express").Router();
const {homePage, signInPage, signUpPage} = require("../controllers/page.controller");

router.get("/home", homePage)
      .get("/signin", signInPage)
      .get("/signup", signUpPage)


module.exports = router;