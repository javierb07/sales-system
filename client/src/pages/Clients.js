import React from 'react';
import ClientsList from '../components/ClientsList';
import AddClient from '../components/AddClient';
import axios from 'axios';

export default class Clients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clientsContent: [],
        };
        this.addClient = this.addClient.bind(this);
      }
  
    componentDidMount() {
      axios.get(`/api/clients/`)
        .then(res => {
          const clientsContent = res.data;
          this.setState({ clientsContent });
        })
    }

    addClient () {
        axios.get(`/api/clients/`)
        .then(res => {
          const clientsContent = res.data;
          this.setState({ clientsContent });
        });
    }

    render() {
      return (
        <>
            <h1>Clients</h1>
            <AddClient addHandler={this.addClient} />
            <ClientsList clients={this.state.clientsContent} />
         </>
      )
    }
  }
