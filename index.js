import express from "express";


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("Here it is!!");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});