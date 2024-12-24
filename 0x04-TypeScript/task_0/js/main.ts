interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

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

const studentsList: Student[] = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement('table');

for (const student of studentsList) {
  const tableRow: HTMLTableRowElement = document.createElement('tr');
  
  for (const key in student) {
    const tableData: HTMLTableCellElement = document.createElement('td');
    tableData.innerText = student[key as keyof Student].toString();
    tableRow.appendChild(tableData);
  }

  table.appendChild(tableRow);
}

document.body.appendChild(table);