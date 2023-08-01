/*
    Task 3: Asynchronous File Handling
    Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
*/


//import fs module for read file
const fs = require('fs');

const filename = 'data.txt';
countWords(filename); 

function countWords(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }

    //count the words
    const wordCount = data.split(/\s+/).length;
    console.log('Total word count:', wordCount);  
  });
}


