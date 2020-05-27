import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Search = (props) => {
	const { strains, searchString, setSearchString } = props;

	const handleChange = (e) => {
		e.persist();
		setSearchString(e.target.value);
	};

	let filteredStrains = strains.filter((strains) => {
		return (
			strains.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
				strains.plantCategory
					.toLowerCase()
					.indexOf(searchString.toLowerCase()) !== -1 ||
				strains.parents.toLowerCase().indexOf(searchString.toLowerCase()) !==
					-1,
			strains.info.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
				strains.smellAndFlavor
					.toLowerCase()
					.indexOf(searchString.toLowerCase()) !== -1 ||
				strains.effect.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
		);
	});

	return (
		<>
			<form>
				<input
					type='text'
					className='form-input'
					name='searchString'
					required
					placeholder='Search'
					onChange={handleChange}
					value={searchString}
				/>
			</form>
			<div>
				{filteredStrains === 0 ? (
					<p className='plain-text'>
						Sorry, there are no strains that match your query.
					</p>
				) : (
					filteredStrains.map((strain) => (
						<h2 className='plain-text' key={strain._id}>
							<Link to={`/strains/${strain._id}`} className='list-strain-name'>
								{' '}
								{strain.name}
							</Link>
						</h2>
					))
				)}
			</div>
		</>
	);
};

export default Search;
