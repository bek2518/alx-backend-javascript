export default function hasValuesFromArray(set, array) {
  let index = 0;

  while (index < array.length) {
    if (!set.has(array[index])) {
      return (false);
    }
    index += 1;
  }
  return (true);
}
