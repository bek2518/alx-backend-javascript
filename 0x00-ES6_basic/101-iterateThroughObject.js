export default function iterateThroughObject(reportWithIterator) {
  let nameString = '';
  let x = 0;
  for (const item of reportWithIterator) {
    const count = reportWithIterator.length;
    nameString += item;
    if (x < (count - 1)) {
      nameString += ' | ';
      x += 1;
    }
  }
  return nameString;
}
