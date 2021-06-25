const employee = {
    name: 'Matt',
    streetAddress: '123 Fake Street'
}

function updateEmployeeWithKeyAndValue(employee, name, Mike) {
    const newEmployee = {...employee}
    newEmployee[name] = Mike
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Sam) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway' 
    return employee
}

function deleteFromEmployeeByKey (employee, name) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee.name
    return employee
}