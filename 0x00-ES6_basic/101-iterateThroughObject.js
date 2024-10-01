export default function iterateThroughObject(reportWithIterator) {
  // Array of employee names
  const employeesArray = [...reportWithIterator];

  // String separated by ' | ' and joinng them
  return employeesArray.join(' | ');
}
