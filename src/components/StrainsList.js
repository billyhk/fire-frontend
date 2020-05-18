import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

const StrainsList = (props) => {
	const [strains, setStrains] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${APIURL}/strains`)
			.then((res) => res.json())
			.then((data) => {
				setStrains(data);
			})
			.catch(() => {
				setError(true);
			});
		// eslint-disable-next-line
	}, []);

	if (error) {
		return <div>Sorry, there was a problem getting strains.</div>;
	}

	if (strains.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className='strains-gallery-container'>
			{strains.map((strain) => (
				<div>
					<img alt='' src=''/>
					<Link to={`/strains/${strain._id}`}>{strain.name}</Link>
				</div>
			))}
		</div>
	);
};

export default StrainsList;
