import React from 'react';

const SearchForm = ({ handleSubmit, handleChange, searchString }) => (

		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				className='form-input'
			/>
			<button type='submit' className='submit-button'>
				Search
			</button>
		</form>
	);

export default SearchForm;
