const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = {...obj}
  newEmployee[key] = value
  return newEmployee
}
newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam')


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, 'name', 'Sam')

function deleteFromEmployeeByKey(obj, key) {
  const newEmployee = {...obj}
  delete newEmployee[key]
  return newEmployee
}
deleteFromEmployeeByKey(newEmployee, 'name')

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key]
  return obj
}
destructivelyDeleteFromEmployeeByKey(newEmployee, 'name')