import express, { Express, Request, Response } from "express";
import * as path from "path";

const app: Express = express();
const port = 3000;


const publicDirectory = path.join(__dirname, './public');
// app.use (express.json());
app.use(express.static(publicDirectory));
// app.use(express.urlencoded({ extended: false }));

// Render the main page
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(publicDirectory, 'index.html'))
  // res.render("index.html");
  // res.send("Hi there this is from HTML");
});

// Implementing a template engine
app.set('src', path.join(__dirname, 'src'));
// app.set('view engine', 'html');





// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
    console.log (`Server Started on port ${port}`);
  });

  // time: int = 

  // any time = document.getElementById("timer");
  // onclick
  // time: double = t
  // for (let index = 0; index <= timer; index++) {
  //   const element = array[index];
  // }