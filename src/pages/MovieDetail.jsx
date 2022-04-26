import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MovieService from '../API/MovieService';
import { useFetching } from '../hooks/useFetching';

const MovieDetail = () => {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    const [fetchMovie, isMovieLoading, movieErrorLoading] = useFetching(async (id) => {
        const data = await MovieService.getById(id);
        setMovie(data);
        console.log(data);
    })

    useEffect(() => {
        fetchMovie(id);
    }, []);

    return (
        <Container>
            <Row className='my-4'>
                <Col md="3" className='text-center'>
                    <Image src={movie.Poster} alt={movie.Title} fluid={true}/>
                </Col>
                <Col className='mt-3 mt-md-0'>
                    <h1 className='h2'>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <p>IMBD: <Badge className='fs-6'>{movie.imdbRating}</Badge></p>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetail;