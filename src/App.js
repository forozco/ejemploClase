import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import ContactList from "./components/ContactList";

import axios from "axios";

class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount() {
    var config = {
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
    };
    axios
      .get("http://localhost:8080/adoptables/dogs", config)
      .then(response => {

        // Crea un arreglo de elementos en el cual se recibiran los datos
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // Crea una nuevo obteto de tipo "State" el cual puede mutar
        // y recibir el arreglo de elementos

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // Almacenar en el store el nuevo valor del objeto state
        // y asigarnlo al componente state

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Obtener datos de un GET desde una API</h1>
        </header>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;