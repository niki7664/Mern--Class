import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadSpecificStudent = () => {
  let params = useParams();

  let [student, setStudent] = useState({});

  let getStudent = async () => {
    let result = await axios({
      url: `http://localhost:8000/students/${params.id}`,
      method: "GET",
    });
    setStudent(result.data.result);
  };
  console.log(params.id)

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <p>student name: {student.name}</p>
      <p>Age:{student.age}</p>
      <p> Are you married: {student.isMarried? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ReadSpecificStudent