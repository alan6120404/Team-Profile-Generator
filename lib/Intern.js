const inquirer = require("inquirer");

class Intern {
    constructor() {
        this.school = [];
        this.role = [];
    }

    getSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: 'What is your current school name?',
                validate: schoolInput => {
                    if (schoolInput) {
                      return true;
                    } else {
                      console.log('Please enter your school name!');
                      return false;
                    }
                  }
            })
            .then (({ school }) => {
                this.school = new Intern(school);

                this.getRole();
            })
    }

    getRole() {
        // override to return "Intern"
        this.role.push('Intern');
    }
}

module.exports = Intern;