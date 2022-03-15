import React from 'react';
import Button from '@mui/material/Button';

/**
 * 
 * A button that would take the user to the login page
 * 
 */
const ToLoginButton = ({onClick}) => {
	return <Button variant="contained" color="secondary" onClick={onClick}>
		Return To Login
	</Button>
}

export {ToLoginButton};