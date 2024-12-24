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
