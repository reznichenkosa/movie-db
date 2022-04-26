
import React, { useContext, useRef } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Eye, Film, Heart, Search } from 'react-bootstrap-icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../context';

const Header = () => {
    const {setSearchParams, dispatch, filter} = useContext(DataContext);
    const searchRef = useRef();
    const navigation = useNavigate();
    const location = useLocation();

    const handlerSearchBtn = () => {
        
        setSearchParams(searchRef.current.value);
        if (location !== '/') {
            navigation('/');
        }
    }

    const handlerSearchKey = (e) => {
        
        if (e.code === 'Enter') {
            setSearchParams(searchRef.current.value);
        }
        if (location !== '/') {
            navigation('/');
        }
    }

    const handlerSetFilter = (filter) => {
        
        dispatch({type: 'SET_FILTER', payload: filter})
        if (location !== '/') {
            navigation('/');
        }
    }

    return (
        <header className='sticky-top bg-white'>
            <Container>
                <Row className='py-3 justify-content-between align-items-center'>
                    <Col>
                        <NavLink to="/" className='d-flex align-items-center fw-bold fs-4 text-decoration-none text-reset'>
                            <Film className='me-1'/>Your movies
                        </NavLink>
                    </Col>
                    <Col className='d-none d-sm-block'>
                        <InputGroup size='sm'>
                            <FormControl onKeyDown={handlerSearchKey} ref={searchRef} placeholder="Enter title movie"/>
                            <Button onClick={handlerSearchBtn} className='d-flex align-items-center'><Search/></Button>
                        </InputGroup>
                    </Col>
                    <Col className='d-none d-md-block'>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={() => handlerSetFilter('favorite')} size="sm" variant={filter === 'favorite' ? 'primary' : 'outline-primary'} className="me-2 d-flex align-items-center"><Heart className='me-1'/>Favorite</Button>
                            <Button onClick={() => handlerSetFilter('history')} size="sm" variant={filter === 'history' ? 'primary' : 'outline-primary'} className="d-flex align-items-center"><Eye className='me-1'/>Visited</Button>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </header>

    );       
};

export default Header;