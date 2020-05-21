import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => {
	return isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className='modal-overlay' />
					<div
						className='modal-wrapper'
						aria-modal
						aria-hidden
						tabIndex={-1}
						role='dialog'>
						<div className='modal'>
							<div className='modal-information'>
								<div className='modal-header'>
									<p>Welcome to FIRE</p>
								</div>
								<p className='modal-text'>
									Before we get started, we need to verify that you're 21+. If
									so, please press confirm to continue.
								</p>
								<a
									className='modal-text'
									href='https://howmanydaystill.com/its/i-turn-21'>
									If not, please come back later.
								</a>
								<button className='modal-close-button' onClick={hide}>
									confirm
								</button>
							</div>
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;
};

export default Modal;
