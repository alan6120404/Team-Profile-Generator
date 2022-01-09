const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        // call parent constructor
        super();
        this.github = "";
    }

    getGithub() {

    }

    getRole() {
        // override to return "Engineer"
    }
}

module.exports = Engineer;

