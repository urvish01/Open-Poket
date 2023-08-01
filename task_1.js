/*
  Task 1: Basic Node.js Server
  Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.
*/


const express = require('express');
const app = express(); // Create an Express app

//for all incoming HTTP requests responds with "Hello, World!" 
app.use((req, res) => {
  res.status(200).send('Hello, World!'); //send status code 200(succses)
});

//Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
