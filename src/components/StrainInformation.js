import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';

const StrainInformation = ({ match }) => {
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
			<h2>{strain.name}</h2>
			<ul>
				<li>{strain.genetics}</li>
				<li>{strain.parents}</li>
				<li>{strain.thcContent}</li>
				<li>{strain.cbdContent}</li>
				<li>{strain.smellAndFlavor}</li>
				<li>{strain.effect}</li>
			</ul>
			<button onClick={onDeletedStrain}>Delete Strain</button>
			<Link to={`/strains/${match.params.id}/edit`}>Update Strain</Link>
		</div>
	);
};

export default StrainInformation;
