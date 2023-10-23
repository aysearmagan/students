import React, { useEffect, useState } from "react";
import studentsData from "../data/studentsData.json";
import StudentCard from "./StudentCard";
import { Button } from "react-bootstrap";
const Students = () => {
  const [students, setStudents] = useState([]);

  const handleDelete = (index) => {
    setStudents((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleAdd = () => {
    const isim = prompt("isim giriniz:");
    const yas = prompt("yas giriniz:");
    const kurs = prompt("kurs giriniz:");
    setStudents((prev) => [...prev, { isim, yas, kurs }]);
  };

  useEffect(() => {
    setStudents(studentsData);
  }, []);

  return (
    <div className="container">
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>

      <div className="d-flex gap-4 flex-wrap">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
