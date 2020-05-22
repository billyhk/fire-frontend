import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import StrainInformation from './components/StrainInformation.js';
import StrainsList from './components/StrainsList';
import Modal from './components/Modal';
import useModal from './components/useModal';
import './comp-css/modal.css';
import './comp-css/strainList.css';
import './comp-css/headerNav.css';
import './comp-css/createAndEdit.css';
import './comp-css/footerSignatures.css';
import './comp-css/strainInformation.css';
import { FaBars, FaPlus, FaHome } from 'react-icons/fa';

const App = () => {
	const { isShowing, toggle } = useModal();

	return (
		<>
			<Modal isShowing={isShowing} hide={toggle} />
			<header>
				<nav>
					<Link className='links' to='/'>
						<h1 className='header-title-left'>| i r e</h1>
					</Link>
					<ul className='header-links-right'>
						<Link className='links' to='/'>
							<li>
								<FaHome alt='home' />
							</li>
						</Link>
						<Link className='links' to='/strains'>
							<li>
								<FaBars alt='all strains' />
							</li>
						</Link>
						<Link className='links' to='/create'>
							<li>
								<FaPlus alt='create strain' />
							</li>
						</Link>
					</ul>
				</nav>
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
			<footer>
				<ul>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://www.linkedin.com/in/etinamoreno/'>
							ERNESTINE M
						</a>
					</li>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://www.linkedin.com/in/williamhkaufman/'>
							WILLIAM K
						</a>
					</li>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://www.linkedin.com/in/andresortizmontalvo/'>
							ANDRÉS O M
						</a>
					</li>
				</ul>
				<span className='sign-date'>
					<small>
						20<span className='sign-first-letter'>20</span>
					</small>
				</span>
			</footer>
		</>
	);
};

export default App;
