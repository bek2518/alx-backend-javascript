export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const employees = [];
  let idx = 0;

  for (const key of keys) {
    for (const employee of report.allEmployees[key]) {
      employees[idx] = employee;
      idx += 1;
    }
  }
  return employees;
}
