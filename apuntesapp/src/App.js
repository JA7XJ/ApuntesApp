//import logo from './logo.svg';
import './App.css';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter,  
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useHistory } from "react-router-dom";

function App() {

  
  return (

      <div className="App">
        <nav>
          <h1>Apuntes</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese email" />
              <Form.Text className="text-muted">
                Tranquilo, el sitio es seguro :)
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ingresar
            </Button>
            <Button variant="primary" type="submit" component={Link} to = "/registrar">
              ¡Registrate!
            </Button>
          </Form>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route path="/registrar">
              <registrar />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

  );
}

function registrar(){
  return(
    <div className="registrar">
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
}

export default App;
