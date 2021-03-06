import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "533-567-5325",
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "555-355-5345",
      },
    ],
  };
  render(){
      return(
          <Context.Provider value = {this.state}>
            {this.props.children}
          </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer; 