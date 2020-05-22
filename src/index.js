import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
	<Router basename='/FIRE-front'>
		{/* <div>
			<img className='main-background' src='https://download.hipwallpaper.com/desktop/1920/1080/26/94/kwSV6a.jpg' alt='flower background'/>
		</div> */}
		<App />
	</Router>,
	document.getElementById('root')
);
