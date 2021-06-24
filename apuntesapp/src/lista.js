import React, { Component } from "react";
import Post from "./Posts";
import { apuntes } from "./Usuario.json";
import styled from 'styled-components';

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

export default class Lista extends Component {
  constructor() {
    super();
    this.state = {
      apuntes,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(apuntes) {
    var datosJson = JSON.stringify(this.state.apuntes);
    localStorage.setItem("datosJson ", datosJson);
    this.setState({
      apuntes: [...this.state.apuntes, apuntes],
    });
  }

  render() {
    const apuntes = this.state.apuntes.map((apuntes, i) => {
      return (

            <div class="card" key={i}>
                <div class="card-body">
                    <div class="card-content">
                        <span class="card-title">
                        <h5>{apuntes.title}</h5>
                        </span>
                        <div class="card-action">{apuntes.description}</div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                            <br />
                        </div>
                    </div>
                </div>
            </div>

      );
    });

    return (
  
      <div className={this.props.col}>
        <Post onAddTodo={this.handleAddTodo}></Post>
        <br />
        <div className="conteiner d-flex justify-content-center">
          <div className="row">
            <div className="card">
              <span class="card-title">Apuntes creados</span>
              {apuntes}
            </div>
          </div>
        </div>
      </div>

    );
  }
}