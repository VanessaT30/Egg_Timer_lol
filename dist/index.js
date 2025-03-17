"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// // Implementing a template engine - serves dynamic pages
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// Serve static files (including `dist/timer.js`)
app.use(express_1.default.static(path.join(__dirname, '/src')));
app.use(express_1.default.static('public'));
app.use(express_1.default.static('dist'));
app.use(express_1.default.static(path.join(__dirname, "dist")));
// Render the main page
app.get("/", (req, res) => {
    // res.sendFile(path.join(publicDirectory, 'index.html'))
    res.sendFile(path.join(__dirname, "/views/index.html"));
});
// Serve HTML files
app.get("/boiled", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/boiled.html")); // Uses boiled.ejs
});
app.get("/fried", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/fried.html"));
});
app.get("/poached", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/poached.html"));
});
app.get("/scrambled", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/scrambled.html"));
});
// listen for incoming requests on port 3000 and logs successful message to the console
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});
// const friedEggs = document.getElementById('boiled') as HTMLButtonElement;
// friedEggs.addEventListener("click", () => {window.location.href = '/boiled'});
function navigate(location) {
    window.location.href = location;
}
// time: int = 
// any time = document.getElementById("timer");
// onclick
// time: double = t
// for (let index = 0; index <= timer; index++) {
//   const element = array[index];
// }
