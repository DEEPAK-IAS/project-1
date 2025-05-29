const router = require("express").Router();
const {signUp ,signIn, signOut} = require("../controllers/auth.controller");

router.post("/signup",signUp)
      .post("/signin",signIn)
      .get("/signout",signOut)


module.exports = router;