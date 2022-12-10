const express = require('express');
const path    = require('path');
const ReactDOMServer = require('react-dom/server');
const fs             = require('fs');
const React  = require('react');
import Hello from '../src/Hello';
import Test from '../src/Test';
const app     = express();
const port    = 3000
console.log('__dirname',__dirname);
app.use("/static",express.static(path.join(__dirname, '../public')));
app.get('/',function(req,res){
    const component = ReactDOMServer.renderToString(<Hello />);
    const html =`
         <!doctype html>
         <html  lang="en">
         <head>
         <meta charset="utf-8">
         <title>React App </title>
         </head>
         <body>
         <div id="root">${component}</div>
         <div><a href="/app" alt="app link">Link</a></div>
         <script src="./static/bundle.js"></script>
         </body>
         </html>
    `;
    res.send(html);
})
app.get('/app',function(req,res){
    const component = ReactDOMServer.renderToString(<Test />);
    const html =`
         <!doctype html>
         <html  lang="en">
         <head>
         <meta charset="utf-8">
         <title>React App </title>
         </head>
         <body>
         <div id="root">${component}</div>
         <script src="./static/bundle.js"></script>
         </body>
         </html>
    `;
    res.send(html);
})

app.get('/getMovieList',function(req,res){
    fs.readFile(__dirname+'/../public/assets/db.json',function(err,data){
        if(err)
        throw new Error(err);
        else
        res.send(JSON.parse(data));
     })
})
app.listen(port,()=>{
    console.log('Server running at port:3000')
})