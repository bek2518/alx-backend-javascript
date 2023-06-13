const express = require('express');
const fs = require('fs');

const app = express();
const hostname = '0.0.0.0';
const port = 1245;

async function countStudents(path) {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const fileContent = await fs.promises.readFile(path, 'utf8');
  const fileContentArray = fileContent.split('\n');
  const splitFileContent = [];

  for (let i = 1; i < fileContentArray.length; i += 1) {
    splitFileContent.push(fileContentArray[i].split(','));
  }

  const fieldList = [];
  for (const student of splitFileContent) {
    if (!fieldList.includes(student[3])) {
      fieldList.push(student[3]);
    }
  }

  let numberStudents = 0;
  for (const student of splitFileContent) {
    if (student[0] !== null) {
      numberStudents += 1;
    }
  }
  const report = [];
  report.push(`Number of students: ${numberStudents}`);

  for (const field of fieldList) {
    const names = [];
    for (const student of splitFileContent) {
      if (student[3] === field) {
        names.push(student[0]);
      }
    }
    report.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
  return (report.join('\n'));
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const response = ['This is the list of our students'];
    const data = await countStudents(process.argv[2]);
    response.push(data);
    const text = response.join('\n');
    res.write(text);
    res.end();
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
