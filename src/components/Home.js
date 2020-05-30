import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

const Home = ({ strains, scrollUp }) => {
	let doneLoading;
	// const [strains, setStrains] = useState([]);

	const plantCategories = [
		{ plantCategory: 'Indica', image: '' },
		{ plantCategory: 'Sativa', image: '' },
		{ plantCategory: 'Hybrid: Indica Dominant', image: '' },
		{ plantCategory: 'Hybrid: Sativa Dominant', image: '' },
		{ plantCategory: 'Hybrid: 50/50', image: '' },
	];

	// useEffect(() => {
	// 	fetch(`${APIURL}/strains`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setStrains(data);
	// 		})
	// 		.catch(console.error);
	// 	// eslint-disable-next-line
	// }, []);

	function shuffleArray(array) {
		let i = array.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i / 2));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
	const array = shuffleArray(strains);
	if (strains.length === 0) {
		return <div>Loading...</div>;
	}

	if (array.length === 0) {
		return <div>Loading...</div>;
	} else {
		doneLoading = true;
	}

	function setPopularStrains(e) {
		return e.popular === true;
	}
	function setPopularStrainsOff(e) {
		return e.popular === false;
	}

	const popularStrains = strains.filter(setPopularStrains);
	const randomArray = strains.filter(setPopularStrainsOff);

	if (doneLoading) {
		return (
			<>
				<header id='home-header'>
					<div className='home-header-text'>
						<h1>
							welcome to <span className='home-header-logo'>f i r e</span>
						</h1>
						<h2>{'explore \u00b7 edit \u00b7 create'}</h2>
					</div>
				</header>
				<main>
					<h2 className='plain-text'>Strain Categories</h2>
					<div id='overflow'>
						{plantCategories.map((category) => (
							<div key={category.plantCategory}>
								<Link to={`/strains/category/${category.plantCategory}`} onClick={scrollUp}><h2 className='plain-text'>{category.plantCategory}</h2>
									{/* <img alt={category.plantCategory} className='overflow-image' src={category.image} /> */}
								</Link>
							</div>
						))}
					</div>

					<h2 className='plain-text'>Popular Strains</h2>
					<div id='overflow'>
						{popularStrains.map((strain) => (
							<div key={strain._id}>
								<Link to={`/strains/${strain._id}`}>
									<img
										alt={strain.name}
										className='overflow-image'
										src={strain.mainImage}
									/>
								</Link>
							</div>
						))}
					</div>

					<h2 className='plain-text'>Explore Random</h2>
					<div id='overflow'>
						{randomArray.map((strain) => (
							<div key={strain._id}>
								<Link to={`/strains/${strain._id}`}>
									<img
										alt={strain.name}
										className='overflow-image'
										src={strain.mainImage}
									/>
								</Link>
							</div>
						))}
					</div>
				</main>
			</>
		);
	}
};
export default Home;
