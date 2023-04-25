export default function updateStudentGradeByCity(array, city, newGrades) {
  // to be worked on
  const located = array.filter((list) => list.location === `${city}`);
  const ids = located.map((listed) => listed.id);

  return located
}