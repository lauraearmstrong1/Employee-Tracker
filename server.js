var inquirer = require("inquirer");
//const express = require("express");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Spencer11!",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


function makeDepartment() {
    inquirer.prompt({
            type: "list",
            name: "typeOfChange",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "Add Role",
                "Remove Role"]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees":
                allEmployees();
                break;

            case "View All Employees by Department":
                department();
                break;

            case "View All Employees by Manager":
                manager();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Remove Employee":
                removeEmployee();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            case "Update Employee Manager":
                updateManager();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "Add Role":
                addRole();
                break;

            case "REmove Role":
                removeRole();
                break;

            case "exit":
                connection.end();
                break;
        }
    });
};

function allEmployees() {
    var query = "SELECT department.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id";
    query += "FROM employee INNER JOIN department INNER JOIN role ON employee.employee_id";

    connection.query(query, function (err, res) {
        if (err) throw err;
         console.log(query);

        makeDepartment();

    });
};



function department() {

}

function manager() {

}

function addEmployee() {
    inquirer.prompt([
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
    ]);
    var query = "INSERT INTO employee SET ?", employee
const employee =  new employee
}
//.map(({ id, first_name, last_name }) => ({
//name: `${first_name} ${last_name}`

//   connection.query(query, function (err, res) {
//   })

//         makeDepartment();

//     });
// }

function removeEmployee() {

}

function updateRole() {

}

function updateManager() {

}

function viewRoles() {

}

function addRole() {

}

function removeRole() {

}


        


//makeDepartment();