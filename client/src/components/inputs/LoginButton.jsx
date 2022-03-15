import React from 'react';
import Button from '@mui/material/Button';

/**
 * 
 * A button that would log the user in
 * 
 */
const LoginButton = () => {
	return <Button type="submit" variant="contained" color="primary">
		Login
	</Button>
}

export {LoginButton};