import React, { useState } from 'react';
import SearchForm from './SearchForm';

const Search = () => {
	let apiUrl = 'https://fireinternationalapp.herokuapp.com/strains/search/';
	const [searchString, setSearchString] = useState('');
	const [strains, setStrains] = useState([]);

	function getSearchData(searchString) {
		let newUrl = `${apiUrl}${searchString}`;

		fetch(newUrl)
			.then((response) => response.json())
			.then((response) => {
				setStrains(response);
			})
			.catch(console.error);
	}

	function handleChange(e) {
		setSearchString(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		getSearchData(searchString);
    }
    console.log(searchString)
	return (
		<div>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{!strains ? (
				<p>Sorry, there are no strains that match your query.</p>
			) : (
				strains.map((item) => <h2>{item.name}</h2>)
			)}
		</div>
	);
};

export default Search;
