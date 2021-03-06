import React from 'react';
import { Link } from 'react-router-dom';

const IndicaList = ({strains}) => {
	// const [error, setError] = useState(false);

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
		</div>
	);
};

export default IndicaList;
