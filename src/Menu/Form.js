import React, { Component } from 'react';
import { TextField, Button, withStyles, Container, useTheme, Grid } from '@material-ui/core/';
import Menu from './Menu';

const styles = (theme) => ({
	margin: {
		margin: theme.spacing(1),
	},

	paper: {
		marginTop: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

class Form extends Component {
	state = {
		empDetails: {
			employee_name: '',
			employee_age: 0,
			employee_salary: 0,
		},
	};

	handleDetails = (event) => {
		let value = event.target.name;
		this.setState({
			empDetails: { ...this.state.empDetails, [event.target.name]: event.target.value },
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<>
				<Grid item xs={12}>
					<Container>
						<div className={classes.paper}>
							<div>
								<TextField
									required
									className={classes.margin}
									id='standard-size-normal'
									label='Employee Name'
									name='employee_name'
									onChange={this.handleDetails}
								/>
							</div>
							<div>
								<TextField
									required
									className={classes.margin}
									id='standard-size-normal'
									label='Employee Age'
									name='employee_age'
									onChange={this.handleDetails}
								/>
							</div>
							<div>
								<TextField
									required
									className={classes.margin}
									id='standard-size-normal'
									label='Employee Salary'
									name='employee_salary'
									onChange={this.handleDetails}
								/>
							</div>
							<div>
								<Button
									onClick={() => this.props.handleValues(this.state.empDetails)}
									variant='contained'
									fullWidth
									size='large'
									color='primary'
									className={classes.submit}
								>
									Submit
								</Button>
							</div>
						</div>
					</Container>
				</Grid>
			</>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Form);
