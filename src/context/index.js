import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const DataContext = createContext();

const intialState = {
    movies: [],
    filter: '',
    search: '',
    page: null,
    maxPage: null,
    favorite: {},
    history: [],
}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    state.addSearchParams = (searchParam) => {
        dispatch({type: 'SET_FILTER', payload: 'all'})
        dispatch({type: 'SET_PAGE', payload: 2})
        dispatch({type: 'ADD_SEARCH_PARAMS', payload: searchParam})
    }

    state.toggleFavoriteMovie = (id) => {
        dispatch({type: 'TOGGLE_FAVORITE_MOVIE', payload: id})
    }

    state.dispatch = dispatch;

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;