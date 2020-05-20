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
								<div className='modal-header'></div>
								<p>Welcome!</p>
								<p>Are you 21+?</p>
								<button
									className='modal-close-button'
									onClick={hide}>
									confirm
								</button>
								<a href='http://www.google.com'>
									If not, please come back later.
								</a>
							</div>
						</div>
					</React.Fragment>,
					document.body
			  )
			: null;};

export default Modal;
