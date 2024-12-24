// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students with type annotation
const studentOne: Student = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 25,
    location: 'Cape Town'
};

const studentTwo: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Rwanda'
};

// Create array of students with type annotation
const studentsList: Array<Student> = [studentOne, studentTwo];

// Create and render table with type annotations for HTML elements
const table: HTMLTableElement = document.createElement('table');

// Add header row
const headerRow: HTMLTableRowElement = document.createElement('tr');
const firstNameHeader: HTMLTableCellElement = document.createElement('td');
const locationHeader: HTMLTableCellElement = document.createElement('td');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add student data rows
studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append table to document body
document.body.appendChild(table);
