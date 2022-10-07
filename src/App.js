/** @format */

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Started from './components/Started/Started';

import Exchange from './components/Pages/Exchange/Index';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Header />
			<Main />
			<Started />
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/exchange" element={<Exchange />} />
			</Routes>
		</Router>
	);
};

export default App;
