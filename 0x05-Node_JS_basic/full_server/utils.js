const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileContentArray = data.toString().split('\n');
      const splitFileContent = [];

      for (let i = 1; i < fileContentArray.length; i += 1) {
        splitFileContent.push(fileContentArray[i].split(','));
      }

      const names = [];
      for (const student of splitFileContent) {
        names.push(student[0]);
      }
      resolve(names);
    }
  });
});

module.exports = readDatabase;
