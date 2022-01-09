const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        // call parent constructor
        super();
        this.school = "";
    }

    getSchool() {

    }

    getRole() {
        // override to return "Engineer"
    }
}

module.exports = Intern;