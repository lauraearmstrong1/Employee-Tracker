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
    makeDepartment();
});


function makeDepartment() {
    inquirer.prompt({
        type: "list",
        name: "typeOfChange",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
            // "View All Employees by Department",
            // "View All Employees by Manager",
            // "Update Employee Manager",
            // "Remove Employee",
            // "Remove Role"
        ]
    }).then(function (answer) {
        switch (answer.typeOfChange) {
            case "View All Employees":
                viewEmployees();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Departments":
                viewDepartments();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            // case "View All Employees by Department":
            //     allByDepartment();
            //     break;

            // case "View All Employees by Manager":
            //     manager();
            //     break;

            // case "Remove Employee":
            //     removeEmployee();
            //     break;

            // case "Update Employee Manager":
            //     updateManager();
            //     break;

            // case "Remove Role":
            //     removeRole();
            //     break;

            case "exit":
                connection.end();
                break;
        }
    });
};

function viewEmployees() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.log('make it here')
        console.table(res)

        makeDepartment();

    });
};

function viewRoles() {
    var query = "SELECT role.title AS roles FROM role;"

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res)

        makeDepartment();

    });
}

function viewDepartments() {
    var query = "SELECT department.name AS department FROM department;"

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res)

        makeDepartment();

    });
}

function addEmployee() {
    var rolez
    var managerz
    connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id; ",
        (err, res) => {
            if (err) throw err
            rolez = res.map(({ id, title }) => ({
                name: title,
                value: id
            }))

            connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
                (err, res) => {
                    if (err) throw err
                    managerz = res.map(({ id, first_name, last_name }) => ({
                        name: first_name + " " + last_name,
                        value: id
                    }))
                    managerz.push({ name: "No Manager", value: null })

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
                            name: "role_id",
                            message: "What is the employees role?",
                            choices: rolez
                        },
                        {
                            type: "list",
                            name: "manager_id",
                            message: "Who is the employees manager?",
                            choices: managerz
                        },
                    ]).then(res => {
                        console.log(res)
                        connection.query("INSERT INTO employee Set ?", res,
                            (err, res) => {
                                if (err) throw err
                                console.log("Employee Added")
                                makeDepartment();
                            })
                    })
                })
        })

}

function addDepartment() {

}

function addRole() {

}

function updateRole() {

}


