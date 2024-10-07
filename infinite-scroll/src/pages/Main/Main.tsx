import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<h3>Main</h3>
			<button onClick={() => navigate('/list')}> List Page</button>
		</div>
	);
};

export default Main;
