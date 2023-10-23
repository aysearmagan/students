import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function StudentCard({ student, handleDelete }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={student.img}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{student.isim}</Card.Title>
        <Card.Text>{student.yas}</Card.Text>
        <Card.Text>{student.kurs}</Card.Text>
        <Card.Text></Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
