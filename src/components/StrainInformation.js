import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';

const StrainInformation = ({ match }) => {
	window.scrollTo(0, 0);

	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [strain, setStrain] = useState(null);

	useEffect(() => {
		const url = `${APIURL}/strains/${match.params.id}`;
		fetch(url)
			.then((res) => res.json())
			.then(setStrain)
			.catch(() => {
				setError(true);
			});
		// eslint-disable-next-line
	}, []);

	const onDeletedStrain = (e) => {
		const url = `${APIURL}/strains/${match.params.id}`;
		fetch(url, { method: 'DELETE' })
			.then((res) => {
				setDeleted(true);
			})
			.catch(console.error);
	};

	if (deleted) {
		return <Redirect to='/strains' />;
	}
	if (error) {
		return <div>Sorry, there was a problem getting this strain.</div>;
	}
	if (!strain) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2 className='page-title'>{strain.name}</h2>
			<div className='details-container'>
				<img
					src={strain.mainImage}
					className='details-image'
					alt=''
				/>
				<ul className='details-text'>
					<li className='details-property'>Genetics :</li>
					<li className='details-value'>{strain.genetics}</li>

					<li className='details-property'>Parents :</li>
					<li className='details-value'>{strain.parents}</li>

					<li className='details-property'>THC Content :</li>
					<li className='details-value'>{strain.thcContent}</li>

					<li className='details-property'>CBD Content : </li>
					<li className='details-value'>{strain.cbdContent}</li>

					<li className='details-property'>Small And Flavour :</li>
					<li className='details-value'>{strain.smellAndFlavor}</li>

					<li className='details-property'>Effect :</li>
					<li className='details-value'>{strain.effect}</li>
				</ul>
				<li className='details-property'>Description :</li>
				<li className='details-value'>{strain.info}</li>
			</div>
			<Link to={`/strains/${match.params.id}/edit`}>
				<button>Update Strain</button>
			</Link>
			<button onClick={onDeletedStrain}>Delete Strain</button>
		</div>
	);
};

export default StrainInformation;
