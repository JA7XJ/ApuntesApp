import React, { Component } from "react";
import styled from 'styled-components';
import { NavigationBar2 } from './components/NavigationBar2';
import './Posts.css';

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

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (       
        <div className="conteiner d-flex justify-content-center">
            <NavigationBar2/>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Agregar nuevo apunte</h5>
                    <form onSubmit={this.handleSubmit}>
                    <br />
                    <div>
                        <input
                        type="text"
                        name="title"
                        className="autocomplete"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Título"
                        />
                    </div>
                    <div>
                        <br />
                        <input
                        type="text"
                        name="description"
                        className="autocomplete"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        placeholder="Descripción"
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">
                        Guardar Apunte
                    </button>
                    </form>
                    <br />
                </div>
            </div>
          </div>
        </div>
    );
  }
}