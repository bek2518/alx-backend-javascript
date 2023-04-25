export default function getListStudentIds(array) {
  const list = [];
  if (Array.isArray(array)) {
    let index = 0;
    while (index < array.length) {
      const indexArray = array[index];
      list[index] = indexArray.id;
      index += 1;
    }
  } else {
    return list;
  }
  return list;
}
