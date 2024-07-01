export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentIds = studentList.map((element) => element.id);
  return studentIds;
}
