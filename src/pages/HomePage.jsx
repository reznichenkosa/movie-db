import React from 'react';
import { Container } from 'react-bootstrap';
import MoviesList from '../components/MoviesList';

const HomePage = () => {

    return (
        <Container>
            <MoviesList /> 
        </Container>
    );
};

export default HomePage;