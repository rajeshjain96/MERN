let studentList = [
  { id: 1, name: "Sachin", marks: 45.3 },
  { id: 2, name: "Saurav", marks: 55.3 },
  { id: 3, name: "Rahul", marks: 93.3 },
  { id: 4, name: "Mahendra", marks: 47.1 },
];
function findAll() {
  return studentList;
}
function getStudentById(id) {
  return studentList.find((e, index) => e.id == id);
}
let studemntService = { findAll, getStudentById };
export default studemntService;
