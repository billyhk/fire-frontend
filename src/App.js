import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';

const App = () => {
	return (
		<>
			<header className='app-header'>
				<h1>f i r e</h1>
				<div className='nav-button'>
					<Link to='/'>home</Link>
					<Link to='strains/create'>add strain</Link>
					<Link to='/strains'>all strains</Link>
				</div>
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					{/* <Route exact path='/strains/create' component={Create} />
					<Route exact path='/strains' component={StrainsList} />
					<Route exact path='/strains/:id' component={Show} />
					<Route exact path='/strains/:id/edit' component={Edit} /> */}
				</Switch>
			</main>
		</>
	);
};

export default App;
