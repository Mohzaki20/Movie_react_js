import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

export default function Details() {
  const [data, setData] = useState([]);
  const param = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=bcb8e8c29c33f001b0606a8fe2f6945c`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} className="pt-5">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              rounded
            />
          </Col>
          <Col className="pt-5">
            <h2 className="ps-5 ms-5">{data.original_title}</h2>
            <p className="ps-5 ms-5 pt-5">{data.overview}</p>
            <h5 className="ps-5 ms-5 pt-5">
              Release Date : {data.release_date}
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
