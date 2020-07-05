import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, Redirect } from 'react-router-dom';
import Menu from '../../Menu/Menu';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const onSubmit = () => {
	console.log('Button');
	return <Redirect to='/menu' />;
};

function SignIn() {
	const classes = useStyles();
	return (
		<Container>
			<div className={classes.paper}>
				<Typography component='h1' variant='h4'>
					Sign in
				</Typography>
				<form noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='username'
						label='Username'
						name='username'
						autoComplete='username'
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign In
					</Button>
					<Link href='#' variant='body2'>
						Forgot password?
					</Link>
				</form>
			</div>
		</Container>
	);
}

export default withRouter(SignIn);
