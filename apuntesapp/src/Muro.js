import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import { NavigationBar2 } from './components/NavigationBar2';
import { Nav, Navbar, FormControl } from 'react-bootstrap';

const Styles = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export function Muro(){
    return(
        
        <Styles>
            <NavigationBar2/>
            <h1>¿Que estas pensando?</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="input" placeholder="Titulo" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control as="textarea" rows={3} placeholder="Post" />
                </Form.Group>
                <Button>
                    publicar
                </Button>
            </Form>
        </Styles>
    );
}