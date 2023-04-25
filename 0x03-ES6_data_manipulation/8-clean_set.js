export default function cleanSet(set, startString) {
  const matchedList = [];
  if (!startString) {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      matchedList.push(value.slice(startString.length));
    }
  }
  const matchedString = matchedList.join('-');
  return matchedString;
}
