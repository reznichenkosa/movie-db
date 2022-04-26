import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MovieService from '../API/MovieService';
import { useFetching } from '../hooks/useFetching';

const MovieDetail = () => {

    const [movie, setMovie] = useState({});
    const {id} = useParams();

    const [fetchMovie, isMovieLoading, movieErrorLoading] = useFetching(async (id) => {
        const data = await MovieService.getById(id);
        setMovie(data);
    })

    useEffect(() => {
        fetchMovie(id);
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <Row className='my-4'>
                {isMovieLoading && !movieErrorLoading? <Col md="12" className='text-center'><Spinner className='mt-4' animation="border" variant="primary" /></Col> : 
                <>
                    <Col md="3" className='text-center'>
                        <Image src={movie.Poster} alt={movie.Title} fluid={true}/>
                    </Col>
                    <Col className='mt-3 mt-md-0'>
                        <h1 className='h2'>{movie.Title}</h1>
                        <p>{movie.Plot}</p>
                        <div  className='mb-3'>
                            {movie.Genre && movie.Genre.split(', ').map(item => 
                                <Badge bg="light" text="dark" className='me-1' key={item}>{item}</Badge>
                            )}
                        </div>
                        <p>IMBD: <Badge className='fs-6'>{movie.imdbRating}</Badge></p>
                    </Col>
                </>}
            </Row>
        </Container>
    );
};

export default MovieDetail;