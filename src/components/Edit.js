import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config';
import StrainForm from './StrainForm.js';

const StrainEdit = ({ match }) => {
	const [strain, setStrain] = useState(null);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/strains/${match.params.id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setStrain({
					name: data.name,
					genetics: data.genetics,
					parents: data.parents,
					thcContent: data.thcContent,
					cbdContent: data.cbdContent,
					smellAndFlavor: data.smellAndFlavor,
					effects: data.effects,
				}).catch(() => {
					setError(true);
				});
			});
		// eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		e.persist();
		setStrain({
			...strain,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${APIURL}/strains/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(strain),
		})
			.then((res) => res.json())
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/strains/${createdId}`} />;
	}
	return (
		<>
			<h2>We greatly appreciate all of our contributors!</h2>
			<h3>please fill out the form below to lend some love to our database</h3>
			<h4>edit our entry on {strain.name}...</h4>
			{error && <p>Something went wrong... Please try again!</p>}
			<StrainForm
				strain={strain}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default StrainEdit;
