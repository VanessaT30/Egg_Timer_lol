import express, { Express, Request, Response } from "express";
import * as path from "path";


const app: Express = express();
const port = 3000;

// // Implementing a template engine - serves dynamic pages
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Serve static files (including `dist/timer.js`)
app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static('public'))
app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, "dist")));



// Render the main page
app.get("/", (req: Request, res: Response) => {
  // res.sendFile(path.join(publicDirectory, 'index.html'))
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// Serve HTML files
app.get("/boiled", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/dist/views/boiled.html"));// Uses boiled.ejs
});

app.get("/fried", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./views/fried.html"));
});

app.get("/poached", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./views/poached.html"));
});

app.get("/scrambled", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./views/scrambled.html"));
});



// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
  console.log (`Server Started on port ${port}`);
});

// const friedEggs = document.getElementById('boiled') as HTMLButtonElement;
// friedEggs.addEventListener("click", () => {window.location.href = '/boiled'});



function navigate(location: string) {
  window.location.href = location
}


  // time: int = 

  // any time = document.getElementById("timer");
  // onclick
  // time: double = t
  // for (let index = 0; index <= timer; index++) {
  //   const element = array[index];
  // }