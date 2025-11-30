const express = require("express");
const app = express();
const userModel = require("./models/user");
const dbconnection = require("./config/db");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// yeh dono use krna hota hai kyuki form se data post method kr rhe hai toh data store krne ke liye yeh dono likhna jroori hai .

// css file ko chlane ke liye use krenge :
app.use(express.static("public"));

// 3 type ke middleware hote hai buitin, custom and thirdparty middleware yeh neeche wala custom hai .
app.use((req, res, next) => {
  console.log("This is middleware");
  let a = 2;
  let b = 5;
  console.log(a + b);
  return next();
});

app.get(
  "/",
  (req, res, next) => {
    let a = 4;
    console.log(a);
    next();
  },
  (req, res) => {
    //   res.send("Server started");
    res.render("index");
  }
);

app.get("/register", (req, res) => {
  res.render("register");
});

// Create user
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  await userModel.create({
    username: username,
    email: email,
    password: password,
  });
  res.send("User Registered");
});

// Read users
app.get("/get-users", (req, res) => {
  //   userModel.find().then((atul) => {
  //     res.send(atul);
  //   });
  // Or
  //   userModel.find({ username: "atul" }).then((user) => {
  //     res.send(user);
  //   });
  // OR
  userModel.findOne({ username: "Atifatul" }).then((user) => {
    res.send(user);
  });
});

// Update User
app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    { username: "Atifatul" },
    { email: "mdatif.reyyani.cs.2021@mitmeerut.ac.in" }
  );
  res.send("User Updated");
});
app.all("/about", (req, res) => {
  res.status(404).send("Wrong try again");
});

// Delete User
app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    username: "atul",
  });
  res.send(`Username deleted`);
});

// Post methode frontend se server tk data laana ke liye use hota hai and
// get  method  server se frontend tk data laane ke liye use hota hai .
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});
app.listen(5000, () => {
  console.log("Server started");
});
