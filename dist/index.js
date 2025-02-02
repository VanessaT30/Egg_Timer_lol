"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Render the main page
app.get("/", (req, res) => {
    // res.render("index");
    res.send("Hi there this is from HTML");
});
//   app.get("/Hi", (req, res) => {
//     res.send("Hi There this is from HTML")
//   });
// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
    console.log("Server Started on port 3000");
});
