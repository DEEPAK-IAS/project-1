const path = require("path");
const homePagePath = path.join(__dirname,"../../frontend/views/index.html");
const signInPagePath = path.join(__dirname, "../../frontend/views/signin.html");
const signUpPagePath = path.join(__dirname, "../../frontend/views/signup.html");


function homePage(req,res) {
  res.sendFile(homePagePath)
}

function signInPage(req, res) {
  res.sendFile(signInPagePath)
}


function signUpPage(req,res) {
  res.sendFile((signUpPagePath));
}

module.exports = {
  homePage,
  signInPage,
  signUpPage
}

