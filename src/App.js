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
import './comp-css/form.css';

const App = () => {
	const { isShowing, toggle } = useModal();
	// const { useRef } = React;
	// const hamburgerButtonRef = useRef();

	return (
		<>
			{/* <Modal isShowing={isShowing} hide={toggle} /> */}
			<header>
				<nav>
					<Link className='links' to='/'>
						<h1>| i r e</h1>
					</Link>
					{/* <Link className='links' to='/'>
						<img
							className='nav-icon'
							src='https://github.com/andresaugusto/FIRE-front/blob/master/src/images/icons/home.png'
							alt='home.png'
						/>
					</Link> */}
					<ul>
						<Link className='links' to='/'>
							<li>
								<img
									className='nav-icon'
									src='src/images/icons/home.jpg'
									alt='home.png'
								/>
							</li>
						</Link>
						<Link className='links' to='/strains'>
							<li>all</li>
						</Link>
						<Link className='links' to='/create'>
							<li>create</li>
						</Link>
					</ul>
				</nav>
			</header>
			{/* <header className='app-header'>
				<h1>f i r e</h1>
				<div className='nav-button'>
					<Link to='/'>
						<h1>home</h1>
					</Link>
					<h1>{'\u00b7'}</h1>
					<Link to='/strains'>
						<h1>all strains</h1>
					</Link>
					<h1>{'\u00b7'}</h1>
					<Link to='/create'>
						<h1>add strain</h1>
					</Link>
				</div>
			</header> */}
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
				<ul className='sign-profile-link'>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://www.linkedin.com/in/andresortizmontalvo/'>
							L I N K E D I N
						</a>
					</li>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://github.com/andresaugusto'>
							G I T H U B
						</a>
					</li>
					<li className='sign-profile-link'>
						<a
							className='sign-profile-link'
							href='https://codepen.io/andresaugusto'>
							C O D E P E N
						</a>
					</li>
				</ul>
				<div className='sign-email'>andres.augusto@icloud.com</div>
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

// {
// 	/* <!--Navbar--> */
// }
// <nav class='navbar navbar-dark  indigo darken-2'>
// 	{/* <!-- Navbar brand --> */}
// 	<h1 class='navbar-brand'>f i r e</h1>

// 	{/* <!-- Collapse button --> */}
// 	<button
// 		ref={hamburgerButtonRef}
// 		class='navbar-toggler third-button'
// 		type='button'
// 		data-toggle='collapse'
// 		data-target='#navbarSupportedContent22'
// 		aria-controls='navbarSupportedContent22'
// 		aria-expanded='false'
// 		aria-label='Toggle navigation'>
// 		<div class='animated-icon3'>
// 			<span></span>
// 			<span></span>
// 			<span></span>
// 		</div>
// 	</button>

// 	{/* <!-- Collapsible content --> */}
// 	<div class='collapse navbar-collapse' id='navbarSupportedContent22'>
// 		{/* <!-- Links --> */}
// 		<ul class='navbar-nav mr-auto'>
// 			<li class='nav-item active'>
// 				<Link to='/'>
// 					<h1 class='nav-link'>
// 						home <span class='sr-only'>(current)</span>
// 					</h1>
// 				</Link>
// 			</li>
// 			<li class='nav-item'>
// 				<Link to='/strains'>
// 					<h1 class='nav-link'>strains</h1>
// 				</Link>
// 			</li>
// 			<li class='nav-item'>
// 				<Link to='/create'>
// 					<h1 class='nav-link'>create strain</h1>
// 				</Link>
// 			</li>
// 		</ul>
// 		{/* <!-- Links --> */}
// 	</div>
// 	{/* <!-- Collapsible content --> */}
// </nav>;
// {
// 	/* <!--/.Navbar--> */
// }
