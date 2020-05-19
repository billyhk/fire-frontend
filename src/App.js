import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import StrainInformation from './components/StrainInformation.js';
import StrainsList from './components/StrainsList';

const App = () => {
	return (
		<>
			<header className='app-header'>
				<h1>f i r e</h1>
				<div className='nav-button'>
					<Link to='/'>
						<h1>home</h1>
					</Link>
					<h1>
						{'\u00b7'}
					</h1>
					<Link to='/create'>
						<h1>add strain</h1>
					</Link>
					<h1>
						{'\u00b7'}
					</h1>

					<Link to='/strains'>
						<h1>all strains</h1>
					</Link>
				</div>
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/create' component={Create} />
					<Route exact path='/strains/:id/edit' component={Edit} />
					<Route exact path='/strains/:id' component={StrainInformation} />
					<Route exact path='/strains' component={StrainsList} />
				</Switch>
			</main>
		</>
	);
};

export default App;
