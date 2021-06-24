import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import { NavigationBar2 } from './components/NavigationBar2';
import { Nav, Navbar, FormControl, Card } from 'react-bootstrap';
import './Muro.css';

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
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <Card style={{ width: '20rem' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Agregar nuevo apunte</Form.Label>
                    <Form.Control type="input" placeholder="Titulo" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control as="textarea" rows={3} placeholder="Descripcion" />
                </Form.Group>
                <Button>
                    publicar
                </Button>
                <h1></h1>
                </Form>
            </Card>
        </Styles>
    );
}