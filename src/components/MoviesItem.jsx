import React, { useContext } from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context';
import noImage from '../assets/img/no-image.jpeg';

const MovieItem = ({Poster, Title, Type, Year, imdbID}) => {
    const {toggleFavoriteMovie, favorite, dispatch} = useContext(DataContext);
    const favoriteIcon = favorite[imdbID] ? <HeartFill size={24}/> : <Heart size={24}/>;
    const navigation = useNavigate();

    const handlerFavorite = (e) => {
        e.preventDefault();
        toggleFavoriteMovie({imdbID, Poster, Title, Type, Year});
    }

    const handlerMoreInfo = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_HISTORY', payload: {imdbID, Poster, Title, Type, Year}});
        navigation(`/${imdbID}`);
    }

    return (
        <Col xl="3" lg='4' md="6" className='mt-4'>
            <Card>
                <CardImg variant='top' style={{height: '400px', objectFit: 'cover'}} src={Poster !== "N/A" ? Poster : noImage} alt={Title}/>
                <Card.Body>
                    <Card.Title className='w-100 text-truncate'>
                                    {Title}
                    </Card.Title>
                    <div className='d-flex justify-content-between'>
                        <div>{Type}</div>
                        {Year}
                    </div>
                    <div className='mt-3 d-flex justify-content-between align-items-center'>
                        <Card.Link href='' onClick={handlerMoreInfo}>More info</Card.Link>
                        <Card.Link href='' className='pe-auto' onClick={handlerFavorite}>{favoriteIcon}</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieItem;