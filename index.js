import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/search", async (req, res) => {
    const name = req.body.name;


    const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        { params: {s:name }}
    );

    console.log(result.data.drinks[0]);
    res.send("Check the terminal!")


});

// app.post("/search", (req, res) => {
//     console.log(req.body);
//     res.send("Here it is!!");
// });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});