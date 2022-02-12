// console.log("SRC");

const path = require('path');
const fs = require('fs/promises');

const booksPath = path.join(__dirname, '..', 'db', 'books.json')

  ; (async () => {
    try {
      const data = await fs.readFile(booksPath, 'utf-8');
        console.log(data);      
    } catch (err) {
      console.log(err);
    }
})()