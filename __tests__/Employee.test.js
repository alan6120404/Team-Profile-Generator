const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('create a employee object', () => {
    const employee = new Employee ('Alan');

    expect(employee.name).toBe('Alan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('check if name is a string'), () => {
    const employee = new Employee ('');

    expect(employee)
}