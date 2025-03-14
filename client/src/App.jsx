import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import StudentList from "./StudentList";

function App() {
  let [studentList, setStudentList] = useState([]);
  useEffect(() => {
    handleGetStudentsClick();
  }, []);
  async function handleGetStudentsClick() {
    let response = await axios("http://localhost:3000/students");
    setStudentList(response.data);
  }

  return (
    <>
      <div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleGetStudentsClick}
        >
          Get Students
        </button>
        <button className="btn btn-primary">Add Student</button>
      </div>
      <StudentList studentList={studentList} />
    </>
  );
}

export default App;
