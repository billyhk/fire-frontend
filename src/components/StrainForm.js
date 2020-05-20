import React from 'react';

const StrainForm = ({ strain, handleSubmit, handleChange }) => {
	window.scrollTo(0, 0);
	return (
		<form className='strain-form' onSubmit={handleSubmit}>
			<label htmlFor='name' className='form-title'>
				Strain Name
			</label>
			<input
				className='form-input'
				placeholder='Strain Name'
				value={strain.name}
				name='name'
				onChange={handleChange}
				required
				id='name'
			/>

			<label htmlFor='genetics' className='form-title'>
				Genetics
			</label>
			<input
				className='form-input'
				placeholder='Genetics'
				value={strain.genetics}
				name='genetics'
				onChange={handleChange}
				required
				id='genetics'
			/>

			<label htmlFor='parents' className='form-title'>
				Parents
			</label>
			<input
				className='form-input'
				placeholder='Parents'
				value={strain.parents}
				name='parents'
				onChange={handleChange}
				required
				id='parents'
			/>

			<label htmlFor='thcContent' className='form-title'>
				THC Content
			</label>
			<input
				className='form-input'
				placeholder='THC Content'
				value={strain.thcContent}
				name='thcContent'
				onChange={handleChange}
				required
				id='thcContent'
			/>

			<label htmlFor='cbdContent' className='form-title'>
				CBD Content
			</label>
			<input
				className='form-input'
				placeholder='CBD Content'
				value={strain.cbdContent}
				name='cbdContent'
				onChange={handleChange}
				required
				id='cbdContent'
			/>

			<label htmlFor='smellAndFlavor' className='form-title'>
				Smell and Flavor
			</label>
			<input
				className='form-input'
				placeholder='Smell and Flavor'
				value={strain.smellAndFlavor}
				name='smellAndFlavor'
				onChange={handleChange}
				required
				id='smellAndFlavor'
			/>

			<label htmlFor='effect' className='form-title'>
				Effect
			</label>
			<input
				className='form-input'
				placeholder='Effect'
				value={strain.effect}
				name='effect'
				onChange={handleChange}
				required
				id='effect'
			/>

			<label htmlFor='effect' className='form-title'>
				Description
			</label>
			<input
				className='form-input'
				placeholder='Description'
				value={strain.info}
				name='info'
				onChange={handleChange}
				required
				id='info'
			/>

			<button className='submit-button' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default StrainForm;
