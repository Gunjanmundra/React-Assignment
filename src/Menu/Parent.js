import React, { Component } from 'react';
import Form from './Form';
import Menu from './Menu';
import axios from 'axios';

class Parent extends Component {
	state = {
		employeesDetails: []
    };

    componentDidMount() {
		axios
			.get('http://dummy.restapiexample.com/api/v1/employees')
			.then((response) => {
				this.setState({ employeesDetails: response.data.data, loading: false });
			})
			.catch((err) => {
				this.setState({ loading: true });
            }); 
    }

    
    handleValues = (empDetails) => {
        this.setState({ employeesDetails: [{...empDetails, id: this.state.employeesDetails.length + 1}, ...this.state.employeesDetails ] });
        console.log(empDetails);
    };
	render() {
		
		return (
			<>
				<Form handleValues={this.handleValues} />
				<Menu empDetails={this.state.employeesDetails}/>
			</>
		);
	}
}

export default Parent;
