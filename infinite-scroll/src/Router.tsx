import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, List } from './pages';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
