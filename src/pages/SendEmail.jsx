import React from 'react';
import '@styles/SendEmail.scss';
import Logo_Yard_sale from '@logos/logo_yard_sale.svg';
import Icon_Email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<h1>Hola Mundo</h1>,
		<div className="SendEmail">
			<div className="form-container">
				<img src={Logo_Yard_sale} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={Icon_Email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export {SendEmail}