export default function StudentList(props) {
  let { studentList } = props;
  return studentList.map((e, index) => (
    <div key={index}>
      {e.name} - {e.marks}
    </div>
  ));
}
