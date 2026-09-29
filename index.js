import express from "express";
import axios from "axios";

const app = express();
const port = 3000; 
// Website ofc 

app.use(express.urlencoded({ extended: true }));

app.post("/search", async (req, res) => {
    const name = req.body.name;

    // await allows the function to pause as we wait for the asnwer 
    const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        { params: {s:name }}
    );


    res.render("index.ejs", { drink:  result.data.drinks[0]});

    // console.log(result.data.drinks[0]);
    // res.send("Check the terminal!")


});


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});