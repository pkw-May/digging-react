import React from 'react';
import { useNavigate } from 'react-router-dom';
const List = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				flexDirection: 'column',
				gap: '10px',
			}}>
			<h3>List</h3>
			<button onClick={() => navigate('/')}> Main Page</button>
			<div>items will be placed here</div>
		</div>
	);
};

export default List;
