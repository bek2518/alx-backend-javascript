export default function getListStudentIds(array) {
  let list = [];
  if (Array.isArray(array)) {
    list = array.map((listed) => listed.id);
  } else {
    return list;
  }
  return list;
}
