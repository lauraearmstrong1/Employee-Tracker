const inquirer = require("inquirer");
const path = require("path");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Spencer11!",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});


function makeDepartment() {
    inquirer.prompt([
        {
            type: "list",
            name: "typeOfChange",
            message: "What would you like to do?",
            choices: [ 
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee", "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role"]
        },
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Sales Lead", "Lawyer"]
        },
    ]).then(results => {
        const newEngineer = new Engineer(results.name, results.id, results.email, results.username)
        employeesArr.push(newEngineer)
        makeTeam()
    })
};

        
    // .then(selection => {
    //     switch (selection.typeOfEmployee) {
    //         case "View_All_Employees":
    //           return  viewAllEmployees();
    //         case "Intern":
    //             makeIntern();
    //             break;
    //         default:
    //             makeChart();
    //     }
    // })


makeDepartment();