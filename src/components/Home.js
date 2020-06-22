import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

const Home = ({ strains, scrollUp }) => {
	let doneLoading;
	// const [strains, setStrains] = useState([]);

	const plantCategories = [
		{
			plantCategory: 'Indica',
			image:
				'https://www.royalqueenseeds.com/modules/prestablog/themes/royalqueenseeds/up-img/112.jpg',
		},
		{
			plantCategory: 'Sativa',
			image:
				'https://darkheartnursery.com/wp-content/uploads/2016/01/jc_sunset_sherbet.jpg',
		},
		{
			plantCategory: 'Hybrid: Indica Dominant',
			image:
				'https://www.pacificgreengrowers.com/wp-content/uploads/2018/06/CarlSaganA-300x300.jpg',
		},
		{
			plantCategory: 'Hybrid: Sativa Dominant',
			image:
				'https://ssl.c.photoshelter.com/img-get/I0000RqMU3_RHTg4/s/1200/I0000RqMU3_RHTg4.jpg',
		},
		{
			plantCategory: 'Hybrid: 50/50',
			image:
				'https://images.squarespace-cdn.com/content/v1/5a80dbc9e45a7c1f4ef344d5/1550582244386-T4QNENSKYPASTZRMWUXL/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/01-16_IG_Purple_C.jpg',
		},
	];

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
					<h2 className='home-headings'>Strain Categories</h2>
					<div id='overflow2'>
						{plantCategories.map((category) => (
							<div key={category.plantCategory}>
								<h2 className='home-subheadings'>
										{category.plantCategory}</h2>
								<Link
									to={`/strains/category/${category.plantCategory}`}
									onClick={scrollUp}>
									<img
										alt={category.plantCategory}
										className='overflow-image'
										src={category.image}
									/>
								</Link>
							</div>
						))}
					</div>

					<h2 className='home-headings'>Popular Strains</h2>
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

					<h2 className='home-headings'>Explore Random</h2>
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
