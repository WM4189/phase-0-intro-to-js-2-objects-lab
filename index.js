const employee = {
    name : 'Will',
    streetAddress : '5752 Route 9'
};

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
    const newObj = {...obj}
    newObj[key]= value
    return newObj
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key]=value
    return obj
}

const deleteFromEmployeeByKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key]
    return obj
}



//// do it again ////

// const employee = {
//     name : 'Will',
//     streetAddress : '385 Union ave'
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmployeeObject = {...employee};
//     newEmployeeObject[key]=value;
//     return newEmployeeObject;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key]=value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = {...employee};
//     delete newEmployee.name;
//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     const newEmployee = employee;
//     delete newEmployee.name;
//     return newEmployee;
// }
