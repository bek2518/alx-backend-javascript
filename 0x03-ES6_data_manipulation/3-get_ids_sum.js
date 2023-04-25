export default function getStudentIdsSum(array) {
  const initialValue = 0;
  const list = array.map((listed) => listed.id);
  const sum = list.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sum;
}
