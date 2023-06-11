import axios from "axios";

export default function changeMovies() {
  return (dispatch) => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=bcb8e8c29c33f001b0606a8fe2f6945c"
      )
      .then((res) => dispatch({type:"SET_MOVIES",payload:res.data.results}))
      .catch((err) => console.error(err));
  };
}
