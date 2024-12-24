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
var studentsList = [studentOne, studentTwo];
var table = document.createElement('table');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var tableRow = document.createElement('tr');
    for (var key in student) {
        var tableData = document.createElement('td');
        tableData.innerText = student[key].toString();
        tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
}
document.body.appendChild(table);
