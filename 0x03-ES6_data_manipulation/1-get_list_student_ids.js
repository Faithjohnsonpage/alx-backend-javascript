export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentIds = studentList.map((element) => {
    return element.id;
  });
  return studentIds;
}
