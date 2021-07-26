const employee = {
    name : 'Will',
    streetAddress : '385 Union ave'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeObject = {...employee};
    newEmployeeObject[key]=value;
    return newEmployeeObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}
