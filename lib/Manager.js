const inquirer = require("inquirer");

class Manager {
    constructor() {

        this.officeNumber = "";
    }

    getRole() {
        // override to return "Engineer"
    }
}

module.exports = Manager;