import express from "express";
import axios from "axios";

const app = express();
const port = 3000; 
// Website ofc 

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { drink: null, error: null });
});

app.post("/search", async (req, res) => {
    const name = req.body.name;

    // await allows the function to pause as we wait for the asnwer 
    const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        { params: {s:name },
    });


   if (result.data.drinks == null ) {
    res.render("index.ejs", {
        drink: null,
        error: "Thats not a Cocktail Silly!!! Try again." ,
    });

    }   else {
        res.render("index.ejs", {
            drink: result.data.drinks[0],
            error: null,
         });

    }


    // console.log(result.data.drinks[0]);
    // res.send("Check the terminal!")


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});