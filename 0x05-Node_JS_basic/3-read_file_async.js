const fs = require('fs');

module.exports = async function countStudents(path) {
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
    if (student[0] != null) {
      numberStudents += 1;
    }
  }
  const report = [];
  report.push(`Number of students: ${numberStudents}`);
  console.log(`Number of students: ${numberStudents}`);

  for (const field of fieldList) {
    const names = [];
    for (const student of splitFileContent) {
      if (student[3] === field) {
        names.push(student[0]);
      }
    }
    report.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
  return (report.join('\n'));
};
