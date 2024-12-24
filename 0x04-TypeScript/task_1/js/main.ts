interface Teacher {
  readonly firstName: string; // Readonly property
  readonly lastName: string;  // Readonly property
  fullTimeEmployee: boolean;  // Mandatory property
  yearsOfExperience?: number; // Optional property
  location: string;           // Mandatory property
  [key: string]: any;         // Index signature to allow additional attributes
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional attribute
};

console.log(teacher3);

// Example: Trying to modify `firstName` or `lastName` will cause a TypeScript error
//teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// For classes, we use an interface to define the shape/methods, not the constructor
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Class properties need to be declared before use
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        // 4. Use 'this' to access class properties
        return `${this.firstName}`;
    }
}
