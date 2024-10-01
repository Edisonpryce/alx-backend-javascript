export default function createIteratorObject(report) {
  const allEmployees = [];

  // Pushing allEmployees array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  return allEmployees[Symbol.iterator]();
}
