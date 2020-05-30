import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import StrainInformation from './components/StrainInformation.js';
import StrainsList from './components/StrainsList';

import IndicaList from './components/categories/Indica';
import SativaList from './components/categories/Sativa';
import HybridIndList from './components/categories/HybridInd';
import HybridSatList from './components/categories/HybridSat';
import Hybrid50List from './components/categories/Hybrid50';

import Modal from './components/Modal';
import useModal from './components/useModal';
import Search from './components/Search';
import './comp-css/modal.css';
import './comp-css/strainList.css';
import './comp-css/headerNav.css';
import './comp-css/createAndEdit.css';
import './comp-css/footerSignatures.css';
import './comp-css/strainInformation.css';
import { FaBars, FaPlus, FaHome, FaSearch } from 'react-icons/fa';

import { APIURL } from './config.js';

function scrollUp() {
	window.scrollTo(0, 0);
}

const App = () => {
	window.scrollTo(0, 0);
	const { isShowing, toggle } = useModal();
	const [strains, setStrains] = useState([]);
	const [searchString, setSearchString] = useState('');

	// const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${APIURL}/strains`)
			.then((res) => res.json())
			.then((data) => {
				setStrains(data);
			})
			.catch(console.error);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{/* <Modal isShowing={isShowing} hide={toggle} /> */}
			<header>
				<nav>
					<Link className='links' to='/'>
						<h1 className='header-title-left'>| i r e</h1>
					</Link>
					<ul className='header-links-right'>
						<Link className='links' to='/'>
							<li>
								<FaHome alt='home' onClick={scrollUp} />
							</li>
						</Link>
						<Link className='links' to='/strains'>
							<li>
								<FaBars alt='all strains' onClick={scrollUp} />
							</li>
						</Link>
						<Link className='links' to='/search'>
							<FaSearch alt='search strains' onClick={scrollUp} />
						</Link>
						<Link className='links' to='/create'>
							<li>
								<FaPlus alt='create strain' onClick={scrollUp} />
							</li>
						</Link>
					</ul>
				</nav>
			</header>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={() => <Home strains={strains} scrollUp={scrollUp} />}
					/>
					<Route exact path='/create' component={Create} />
					<Route exact path='/strains/:id/edit' component={Edit} />
					<Route exact path='/strains/:id' component={StrainInformation} />
					<Route
						exact
						path='/strains'
						render={() => <StrainsList strains={strains} />}
					/>
					<Route
						exact
						path='/search'
						render={() => (
							<Search
								strains={strains}
								searchString={searchString}
								setSearchString={setSearchString}
							/>
						)}
					/>
					{/* category components */}
					<Route
						exact
						path='/strains/category/Indica'
						render={() => <IndicaList strains={strains} />}
					/>
					<Route
						exact
						path='/strains/category/Sativa'
						render={() => <SativaList strains={strains} />}
					/>
					<Route
						exact
						path='/strains/category/Hybrid: Indica Dominant'
						render={() => <HybridIndList strains={strains} />}
					/>
					<Route
						exact
						path='/strains/category/Hybrid: Sativa Dominant'
						render={() => <HybridSatList strains={strains} />}
					/>
					<Route
						exact
						path='/strains/category/Hybrid: 50/50'
						render={() => <Hybrid50List strains={strains} />}
					/>
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
