import express, { Express, Request, Response } from "express";
// import path, from "path";

const app: Express = express();
const port = 3000;

app.use

// Render the main page
app.get("/", (req: Request, res: Response) => {
    // res.render("index");
    res.send("Hi there this is from HTML");
  });

//   app.get("/Hi", (req, res) => {
//     res.send("Hi There this is from HTML")
//   });

// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
    console.log ("Server Started on port 3000")
  });
