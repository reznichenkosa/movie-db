export const reducer = (state, action) => {
    switch (action.type) {
        
        case 'ADD_MOVIES':
            return {...state, movies: action.payload.filter(item => item.Type !== "game")};

        case 'ADD_MORE_MOVIES':
            return {...state, movies: state.movies.concat(action.payload.filter(item => item.Type !== "game"))};

        case 'SET_SEARCH_PARAMS':
            return {...state, search: action.payload};

        case 'SET_PAGE':
            return {...state, page: action.payload};

        case 'SET_MAX_PAGE':
            return {...state, maxPage: Math.ceil(action.payload / 10)};

        case 'SET_FILTER':
            return {...state, filter: action.payload};

        case 'TOGGLE_FAVORITE_MOVIE': {
            
            if (state.favorite[action.payload.imdbID]) {
                const newFavorite = Object.assign({}, state.favorite);
                delete newFavorite[action.payload.imdbID];
                return {...state, favorite: newFavorite}
            }
            return {...state, favorite: Object.assign({}, state.favorite, {[action.payload.imdbID]: action.payload})}
        }

        case 'ADD_HISTORY': {
            if (!state.history[action.payload.imdbID]) {
                return {...state, history: Object.assign({}, state.history, {[action.payload.imdbID]: action.payload})}
            }
            return state;
        }

        case 'CLEAR_HISTORY': {
            return {...state, history: {}}
        }
            
        default:
            return state;
    }
}