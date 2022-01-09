const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        // call parent constructor
        super();
        this.officeNumber = "";
    }

    getRole() {
        // override to return "Engineer"
    }
}

module.exports = Manager;