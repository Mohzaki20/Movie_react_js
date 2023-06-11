import NavbarComponent from "../../components/Navbar/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { RemoveFav } from "../../store/actions/actions";
import { useEffect, useState } from "react";
export default function Favorites() {
  const [count, setCount] = useState();

  const sele = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    setCount(sele.length);
  }, [sele]);
  function handelDelete(ItemId) {
    let deleted = sele.filter((f) => f.id !== ItemId);
    dispatch(RemoveFav(deleted));
  }
  return (
    <>
      <NavbarComponent length={count} />
      {sele.map((ele, index) => {
        return (
          <>
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>{ele.overview}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{ele.release_date}</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link href="#">Link</Card.Link>
                <Button
                  className="btn btn-danger"
                  onClick={() => handelDelete(ele.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
            </>
        );
      })}
      </>
  );
}
