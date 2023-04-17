export default function appendToEachArrayValue(array, appendString) {
  const keys = array.keys();
  const arrayCopy = array;

  for (const idx of keys) {
    const value = arrayCopy[idx];
    arrayCopy[idx] = appendString + value;
  }

  return arrayCopy;
}
