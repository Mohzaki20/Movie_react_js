import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addFav from "../../store/actions/actions";

export default function CardComponent(props) {
  const fav = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function addToFavorite(movie) {
    dispatch(addFav(Array.from([...fav, movie])));
  }
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <>
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.original_title}</Card.Title>
                <Link
                  className="btn btn-primary mt-4"
                  to={`/details/${item.id}`}
                  variant="primary"
                >
                  View
                </Link>
                <Button
                  className="btn btn-dark ms-3 mt-4"
                  onClick={() => {
                    addToFavorite(item);
                  }}
                >
                  Add to Favorite
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}
