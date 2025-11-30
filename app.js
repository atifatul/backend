const express = require("express");
const app = express();

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

app.all("/about", (req, res) => {
  res.status(404).send("Wrong try again");
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
