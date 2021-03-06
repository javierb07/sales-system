import React from 'react';
import EmployeesList from '../components/EmployeesList';
import AddEmployee from '../components/AddEmployee';
import axios from 'axios';

export default class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employeesContent: [],
        };
        this.addEmployee = this.addEmployee.bind(this);
      }
  
    componentDidMount() {
      axios.get(`/api/employees/`)
        .then(res => {
          const employeesContent = res.data;
          this.setState({ employeesContent });
        })
    }

    addEmployee () {
        axios.get(`/api/employees/`)
        .then(res => {
          const employeesContent = res.data;
          this.setState({ employeesContent });
        });
    }

    render() {
      return (
        <>
            <h1>Employees</h1>
            <AddEmployee addHandler={this.addEmployee} />
            <EmployeesList employees={this.state.employeesContent} />
         </>
      )
    }
  }
