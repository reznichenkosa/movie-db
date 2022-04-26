import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const DataContext = createContext();

const intialState = {
    movies: [],
    filter: '',
    search: '',
    page: null,
    maxPage: null,
    favorite: JSON.parse(localStorage.getItem('favorite')) || {},
    history: JSON.parse(localStorage.getItem('history')) || {},
}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    state.setSearchParams = (searchParam) => {
        dispatch({type: 'SET_FILTER', payload: 'search'})
        dispatch({type: 'SET_PAGE', payload: 2})
        dispatch({type: 'SET_SEARCH_PARAMS', payload: searchParam})
    }

    state.toggleFavoriteMovie = (item) => {
        dispatch({type: 'TOGGLE_FAVORITE_MOVIE', payload: item});
    }

    state.dispatch = dispatch;

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;