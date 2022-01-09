const inquirer = require('inquirer');
const Engineer = require('./Engineer');

class Employee extends Engineer {
    constructor() {

        super();

        this.name = [];
        this.id = [];
        this.email = [];

    }

    getName() {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({ name }) => {
            this.name.push(name);

            this.getId();
        });
    }

    getId() {
        inquirer
        .prompt({
            type: 'text',
            name: 'id',
            message: 'What is your employee ID number?'
        })
        .then(({ id }) => {
            this.id.push(id);

            this.getEmail();
        })
    }

    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: 'What is your email address?'
        })
        .then(({ email }) => {
            this.email.push(email);

            this.getRole();
            
        })
    }

    getRole() {
        // if return "Employee"
        inquirer
            .prompt({
                type: 'list',
                message: 'What is your role at the company?',
                name: 'role',
                choices: ['Engineer', 'Manager', 'Intern']
            })
            .then(({ role }) => {
                if (role === 'Engineer') {
                    new Engineer().getGithub();
                }
            })
    }
}

module.exports = Employee;

