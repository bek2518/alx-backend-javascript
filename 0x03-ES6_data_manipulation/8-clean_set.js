export default function cleanSet(set, startString) {
  const matchedList = [];
  if (!startString || !set) {
    return '';
  }
  for (const value of set) {
    if (typeof (value) === 'string') {
      if (value.startsWith(startString)) {
        matchedList.push(value.slice(startString.length));
      }
    } else {
      return '';
    }
  }
  const matchedString = matchedList.join('-');
  return matchedString;
}
