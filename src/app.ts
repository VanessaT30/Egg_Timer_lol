import express, { Express, Request, Response } from "express";
import * as path from "path";

const app: Express = express();
const port = 3000;

// Implementing a template engine
app.set('src', path.join(__dirname, 'src'));
// app.set('view engine', 'html');

const publicDirectory = path.join(__dirname, './public');
  app.use(express.urlencoded({ extended: false }));
  app.use (express.json());

// Render the main page
app.get("/", (req: Request, res: Response) => {
    res.render("index.html");
    res.send("Hi there this is from HTML");
  });



// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
    console.log ("Server Started on port ${port}") 
  });
