// Write your solution in this file!
const employee = {
    name: "Gab",
    streetAddress: "123 sun",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = {...employee};
    newemployee["name"]= "Sam";
    newemployee["streetAddress"]="11 Broadway";
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["name"]= 'Sam';
    employee["streetAddress"]= '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}

