const INTIAL_STATE = {
    movies: [],
};

export default function ReducerMovie(state = INTIAL_STATE, action) {
    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, movies: action.payload };
        default:
            return state;
    }
}