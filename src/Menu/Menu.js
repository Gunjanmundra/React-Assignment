import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	makeStyles,
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
} from '@material-ui/core';

const columns = [
	{ id: 'name', label: 'Employee Name', align: 'center' },
	{ id: 'age', label: 'Employee Age', align: 'center' },
	{ id: 'salary', label: 'Employee Salary', align: 'center' },
];

const useStyles2 = makeStyles({
	table: {
		minWidth: 600,
	},
});

function Menu() {
	const classes = useStyles2();
	const [employees, setEmployees] = useState([]);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get('http://dummy.restapiexample.com/api/v1/employees')
			.then((response) => {
				setEmployees(response.data);
				setLoad(false);
				
			})
			.catch((err) => {
				setError(err.message);
				setLoad(true);
			});
	}, [setEmployees]);
	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label='custom pagination table'>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{load ? (
							<TableRow>
                               <TableCell>
                                   <h1>Loading...</h1>
                               </TableCell>
                            </TableRow>
						) : (
							employees.data.map((employee) => (
								<TableRow>
									<TableCell align={'center'}>{employee.employee_name}</TableCell>
									<TableCell align={'center'}>{employee.employee_age}</TableCell>
									<TableCell align={'center'}>{employee.employee_salary}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default Menu;
