// Create two students with type annotation
var studentOne = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 25,
    location: 'Cape Town'
};
var studentTwo = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Rwanda'
};
// Create array of students with type annotation
var studentsList = [studentOne, studentTwo];
// Create and render table with type annotations for HTML elements
var table = document.createElement('table');
// Add header row
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('td');
var locationHeader = document.createElement('td');
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Add student data rows
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append table to document body
document.body.appendChild(table);
