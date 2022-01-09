const inquirer = require("inquirer");

class Engineer {
    constructor() {
        this.github = [];
        this.role = [];
    }

    getGithub() {
        inquirer
            .prompt({
                type: 'text',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                      return true;
                    } else {
                      console.log('Please enter your GitHub username!');
                      return false;
                    }
                  }
            })
            .then (({ github }) => {
                this.github = new Engineer(github);

                this.getRole();
            })
    }

    getRole() {
        // override to return "Engineer"
        this.role.push('Engineer');
        console.log(this.name)
    }
}

module.exports = Engineer;

