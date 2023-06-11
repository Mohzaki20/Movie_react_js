const INTIAL_STATE = {
    favorites: [],
};

export default function Reducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case "ADD_FAV":
            return { ...state, favorites: action.payload };
            case "REMOVE_FAV":
                return { ...state, favorites:action.payload}
        default:
            return state;
    }
}
