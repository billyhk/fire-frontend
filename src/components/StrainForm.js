import React from 'react';

const StrainForm = ({ strain, handleSubmit, handleChange }) => (
	<form className='strain-form' onSubmit={handleSubmit}>
		<label htmlFor='name'>Strain Name</label>
		<input
			placeholder='Strain Name'
			value={strain.name}
			name='name'
			onChange={handleChange}
			required
			id='name'
		/>

		<label htmlFor='genetics'>Genetics</label>
		<input
			placeholder='Genetics'
			value={strain.genetics}
			name='genetics'
			onChange={handleChange}
			required
			id='genetics'
		/>

		<label htmlFor='parents'>Parents</label>
		<input
			placeholder='Parents'
			value={strain.parents}
			name='parents'
			onChange={handleChange}
			required
			id='parents'
		/>

		<label htmlFor='thcContent'>THC Content</label>
		<input
			placeholder='THC Content'
			value={strain.thcContent}
			name='thcContent'
			onChange={handleChange}
			required
			id='thcContent'
		/>

		<label htmlFor='cbdContent'>CBD Content</label>
		<input
			placeholder='CBD Content'
			value={strain.cbdContent}
			name='cbdContent'
			onChange={handleChange}
			required
			id='cbdContent'
		/>

		<label htmlFor='smellAndFlavor'>Smell and Flavor</label>
		<input
			placeholder='Smell and Flavor'
			value={strain.smellAndFlavor}
			name='smellAndFlavor'
			onChange={handleChange}
			required
			id='smellAndFlavor'
		/>

		<label htmlFor='effect'>Effect</label>
		<input
			placeholder='Effect'
			value={strain.effect}
			name='effect'
			onChange={handleChange}
			required
			id='effect'
		/>

		<button type='submit'>Submit</button>
	</form>
);

export default StrainForm;
