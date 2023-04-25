export default function getStudentsByLocation(array, city) {
  const located = array.filter((list) => list.location === `${city}`);
  return located;
}
