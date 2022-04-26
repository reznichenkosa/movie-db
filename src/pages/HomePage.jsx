import React from 'react';
import { Container } from 'react-bootstrap';
import MoviesList from '../components/MoviesList';
import { motion } from 'framer-motion';

const HomePage = () => {

    return (
        <motion.div transition={{duration: .5}} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 100}}>
            <Container>
                <MoviesList /> 
            </Container>
        </motion.div>
    );
};

export default HomePage;