const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf8');
  const fileContentArray = fileContent.split('\n');
  const splitFileContent = [];

  for (let i = 1; i < fileContentArray.length; i += 1) {
    splitFileContent.push(fileContentArray[i].split(','));
  }
  const numberStudents = splitFileContent.length;
  console.log(`Number of students: ${numberStudents}`);

  const fieldList = [];
  for (const student of splitFileContent) {
    if (!fieldList.includes(student[3])) {
      fieldList.push(student[3]);
    }
  }

  for (const field of fieldList) {
    const names = [];
    for (const student of splitFileContent) {
      if (student[3] === field) {
        names.push(student[0]);
      }
    }
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
};
