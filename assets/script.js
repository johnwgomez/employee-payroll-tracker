// Get a reference to the #add-employees-btn element // Collect employee data Done*
const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = function () {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    let salary = parseFloat(prompt("Enter the employee's salary:"));
    // Validation of salary input
    if (isNaN(salary)) {
      salary = 0;
    }

    // Creation of employee
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // Add employee to array
    employees.push(employee);

    // Ask user to add another
    continueAdding = confirm("Would you like to add another employee?");
  }
  return employees;
}

// Display the average salary   // TODO: Calculate and display the average salary DONE****
const displayAverageSalary = function (employeesArray) {

  // Checks if the array is empty
  if (employeesArray.length === 0) {
    console.log("No information to calculate average salary");
  }
  // Calculates total salary by sum of all employee salaries
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  //Calculate the average
  const averageSalary = totalSalary / employeesArray.length;
  // logs the average salaer in to console. Wanted fromat to display ip to 2 decimal points | USE ` instead of ' spent so much time on this
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
};

// Select a random employee |   // TODO: Select and display a random employee
const getRandomEmployee = function (employeesArray) {
if(employeesArray.length === 0) {
  console.log("No employees Selected");
  return;
}
const randomSelection = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray [randomSelection];
console.log(`random employee: ${randomEmployee.firstName} ${randomEmployee.lastName} ${randomEmployee.salary}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
