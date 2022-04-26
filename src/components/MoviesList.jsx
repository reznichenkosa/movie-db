import React, { useContext, useEffect } from 'react';
import { Col, Row, Button, Spinner } from 'react-bootstrap';
import MovieService from '../API/MovieService';
import { DataContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import MovieItem from './MoviesItem';

const MoviesList = () => {

    const {movies, favorite, history, search, page, maxPage, filter, dispatch} = useContext(DataContext);

    const [fetchMovies, isMoviesLoading, moviesLoadingError] = useFetching(async (dataSearch) => {
        const data = await MovieService.getAll(dataSearch);
        if (data.Response === 'True') {
            dispatch({type: 'ADD_MOVIES', payload: data.Search})
            dispatch({type: 'SET_MAX_PAGE', payload: data.totalResults})
        } else {
            dispatch({type: 'ADD_MOVIES', payload: []})
        }
    })

    const [fetchMoreMovies, isLoadingMoreMovies, errorMoreMovies] = useFetching(async (dataSearch, page) => {
        const data = await MovieService.getAll(dataSearch, page);
        if (data.Response === 'True') {
            dispatch({type: 'ADD_MORE_MOVIES', payload: data.Search});
        } else {
            dispatch({type: 'ADD_MOVIES', payload: []})
        }
    });

    const handlerShowMoreMovies = () => {
        dispatch({type: 'SET_PAGE', payload: page + 1});
        fetchMoreMovies(search, page);
    }
    const filteredMovies = filter === 'favorite' ? Object.values(favorite) : filter === 'history' ? Object.values(history) : movies; 

    const showContent = isMoviesLoading ? <Spinner className='mt-4' animation="border" variant="primary" /> : 
                        filteredMovies.map(item => 
                            <MovieItem key={item.imdbID} {...item}/>
                        )
                        
    const showMoreButton = isLoadingMoreMovies && !errorMoreMovies ? 
                           <Spinner animation="border" variant="primary" /> : 
                           !isLoadingMoreMovies && !isMoviesLoading && !errorMoreMovies && page < maxPage && filteredMovies.length > 0 && filter === 'all' ? 
                           <Button onClick={handlerShowMoreMovies} variant='outline-primary'>More</Button> : null;

    useEffect(() => {
        if (search) {
            fetchMovies(search);
        }
        // eslint-disable-next-line
    }, [search]);
    
    return (
        <Row>
            {showContent}

            <Col md="12" className='d-flex mt-4 justify-content-center align-items-center'>
                {showMoreButton}
            </Col>
        </Row>
    );
};

export default MoviesList;