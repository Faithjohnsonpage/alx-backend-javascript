/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
export var cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};
// For Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// For Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// For React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map