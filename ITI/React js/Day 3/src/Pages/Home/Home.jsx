import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../../components/Navbar/Navbar";
import CardComponent from "../../components/Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import changeMovies from "./../../store/actions/movies";
import { Button } from "react-bootstrap";
import { langContext } from "../../contexts/context";

export default function Home() {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bcb8e8c29c33f001b0606a8fe2f6945c&page=${currentPage}`
      )
      .then((res) => setInfo(res.data.results))
      .catch((err) => console.error(err));
  }, [currentPage]);
  const { lang } = useContext(langContext);
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col className="d-flex flex-wrap gap-4 pt-5">
            <CardComponent data={info} />
            <h5>language is {lang}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-between m-5">
            <Button
              className="btn btn-primary"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </Button>
            <Button
              className="btn btn-primary"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
