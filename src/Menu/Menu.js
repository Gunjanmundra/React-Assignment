import React, { Component } from 'react';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import {
	withStyles,
	useTheme,
	Paper,
	Table,
	TableContainer,
	TableRow,
	TableBody,
	TableCell,
	TableHead,
	IconButton,
	TableFooter,
    TablePagination,
    TextField
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const styles = (theme) => ({
	table: {
		minWidth: 500,
	},
	menu: {
		margin: theme.spacing(4, 4, 1, 4),
	},
});

const invertDirection = {
	asc: 'desc',
	desc: 'asc',
};

class Menu extends Component {
	state = {
		loading: true,
		page: 0,
		rowsPerPage: 5,
		columnToSort: '',
        sortDirection: 'desc',
        editIdx: -1
	};

	handleChangePage = (event, newPage) => {
		this.setState({ page: newPage });
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0 });
	};

	handleSort = (columnName) => {
		this.setState((state) => ({
			columnToSort: columnName,
			sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : 'asc',
		}));
		console.log();
	};

    handleRemove = (i) => {
        this.setState(state =>({
            
        }))
    };
    
    handleRowChange = () => {

    }

    startEditing = () => {

    }

	render() {
		const columns = [
			{ id: 'name', label: 'Employee Name', align: 'center', name: 'employee_name' },
			{ id: 'age', label: 'Employee Age', align: 'center', name: 'employee_age' },
			{ id: 'salary', label: 'Employee Salary', align: 'center', name: 'employee_salary' },
		];

		const { classes } = this.props;
		const dataToDisplay = (this.state.rowsPerPage > 0
								? orderBy(this.props.empDetails, this.state.columnToSort, this.state.sortDirection).slice(
										this.state.page * this.state.rowsPerPage,
										this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
								  )
								: orderBy(this.props.empDetails, this.state.columnToSort, this.state.sortDirection))
		let emptyRows = 0;

		emptyRows =
			this.state.rowsPerPage -
			Math.min(this.state.rowsPerPage, this.props.empDetails.length - this.state.page * this.state.rowsPerPage);

		return (
			<div className={classes.menu}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='custom pagination table'>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell key={column.id} align={column.align}>
										<div
											style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
											onClick={() => this.handleSort(column.name)}
										>
											<span>{column.label}</span>
											{this.state.columnToSort === column.name ? (
												this.state.sortDirection === 'asc' ? (
													
														<ArrowUpwardIcon />
													
												) : (
													
														<ArrowDownwardIcon />
													
												)
											) : null}
										</div>
									</TableCell>
								))}
								<TableCell>Edit</TableCell>
								<TableCell>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{dataToDisplay.map((employee, i) => {
                                const currentlyEditing = this.state.editIdx === i;
								return (
									<TableRow key={`tr-${i}`} selectable={false}>
										<TableCell align={'center'}>{currentlyEditing ? <TextField name= 'employee_name' onChange={this.handleRowChange}/> : employee.employee_name}</TableCell>
										<TableCell align={'center'}>{currentlyEditing ? <TextField name= 'employee_name' onChange={this.handleRowChange}/> : employee.employee_age}</TableCell>
										<TableCell align={'center'}>{currentlyEditing ? <TextField name= 'employee_name' onChange={this.handleRowChange}/> : employee.employee_salary}</TableCell>
										<TableCell>
											{currentlyEditing ? (<CheckIcon onClick={() => this.stopEditing()}/>) : (<EditIcon onClick = {() => this.startEditing(i)}/>)}
										</TableCell>
										<TableCell>
											<DeleteIcon onClick={() => this.handleRemove(i)} />
										</TableCell>
									</TableRow>
								);
							})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
									colSpan={3}
									rowsPerPage={this.state.rowsPerPage}
									count={this.props.empDetails.length}
									page={this.state.page}
									onChangePage={this.handleChangePage}
									onChangeRowsPerPage={this.handleChangeRowsPerPage}
								/>
							</TableRow>
						</TableFooter>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Menu);
