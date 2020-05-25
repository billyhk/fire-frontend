import React from 'react';
import { Link } from 'react-router-dom';

const StrainsList = ({strains}) => {
	
	// if (error) {
	// 	return <div>Sorry, there was a problem getting strains.</div>;
	// }

	if (strains.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className='strains-gallery-container'>
			<h2 className='strain-type'>Indica</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Indica' ? (
					<div key={strain._id}>
						<Link to={`/strains/${strain._id}`} className='list-strain-name'>
							{' '}
							{strain.name}
						</Link>
					</div>
				) : null
			)}
			<h2 className='strain-type'>Sativa</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Sativa' ? (
					<div key={strain._id}>
						<Link to={`/strains/${strain._id}`} className='list-strain-name'>
							{' '}
							{strain.name}
						</Link>
					</div>
				) : null
			)}
			<h2 className='strain-type'>Hybrid: Indica Dominant</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: Indica Dominant' ? (
					<div key={strain._id}>
						<Link to={`/strains/${strain._id}`} className='list-strain-name'>
							{' '}
							{strain.name}
						</Link>
					</div>
				) : null
			)}
			<h2 className='strain-type'>Hybrid: Sativa Dominant</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: Sativa Dominant' ? (
					<div key={strain._id}>
						<Link to={`/strains/${strain._id}`} className='list-strain-name'>
							{' '}
							{strain.name}
						</Link>
					</div>
				) : null
			)}
			<h2 className='strain-type'>Hybrid: 50/50</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: 50/50' ? (
					<div key={strain._id}>
						<Link to={`/strains/${strain._id}`} className='list-strain-name'>
							{' '}
							{strain.name}
						</Link>
					</div>
				) : null
			)}
		</div>
	);
};

export default StrainsList;
