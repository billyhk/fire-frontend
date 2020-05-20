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
			body: JSON.stringify(strain),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
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
			<div className='create-form-header'>
				<img
					className='strain-form-bg'
					src='https://i.imgur.com/SR04reG.jpeg'
					alt='backgroundImg'
				/>
				<h2>We greatly appreciate all of our contributors!</h2>
				<h3>
					Please fill out the form below to add a new strain to our database.
				</h3>
				{error && <p>Something went wrong... Please try again!</p>}
			</div>
			<StrainForm
				strain={strain}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default StrainCreate;
