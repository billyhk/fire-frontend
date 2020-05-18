import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config';
import StrainForm from './StrainForm.js';

const StrainCreate = () => {
	const initialStrainState = {
        name: '',
		genetics: '',
		parents: '',
		thcContent: '',
		cbdContent: '',
		smellAndFlavor: '',
		effect: '',
	};
	const [strain, setStrain] = useState(initialStrainState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		e.persist();
		setStrain({
			...strain,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${APIURL}/strains`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=utf-8',
			},
			BODY: JSON.stringify(strain),
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
			<h4>create a new strain...</h4>
			{error && <p>Something went wrong... Please try again!</p>}
			<StrainForm
				strain={strain}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default StrainCreate;
