/** @format */
import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Exchange from '../Pages/Exchange/Index';

const Main = () => {
	const [convert, setConvert] = useState(0);

	function convertCoin(n1) {
		let spiralToken = 3076039.538490606;
		// function to convert spiral to usd
		// if user input is n1 and n1 is amount of usd user want to purchase multiply it by spiralToken
		// n1 will be the amount of usd user will pay
		setConvert(convert * spiralToken);
	}

	function handleChange(event) {
		let spiralToken = 3076039.538490606;

		console.log(event.target.value);
		setConvert(event.target.value * spiralToken);
	}

	return (
		<div className="intro" data-scroll-index="0">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-xl-6 col-lg-6 col-12">
						<div className="intro-content">
							<h1>
								Trade with <strong className="text-primary">Tradio</strong>.{' '}
								<br /> Buy and sell cryptocurrency
							</h1>
							<p>
								Fast and secure way to purchase or exchange 150+
								cryptocurrencies
							</p>
						</div>

						<div className="intro-btn">
							<a href="#" className="btn btn-primary">
								Get Started
							</a>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-12">
						<div className="intro-form-exchange">
							<form className="currency_validate" action="signin.html">
								<div className="mb-3">
									<label className="form-label">
										Amount of Spiral Token in (USD)
									</label>
									<div className="input-group mb-3">
										<select name="currency" className="form-control">
											<option data-display="SPIRAL TOKEN" value="SPIRAL TOKEN">
												USD
											</option>
										</select>
										<input
											onKeyPress={convertCoin}
											type="number"
											name="usd_amount"
											className="form-control"
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Amount you recieve(SPIRAL)
									</label>
									<div className="input-group mb-3">
										<select name="currency" className="form-control">
											<option data-display="USD" value="USD">
												SPIRAL
											</option>
										</select>
										<input
											type="number"
											name="usd_amount"
											className="form-control"
											value={convert}
										/>
									</div>
								</div>
								<span>Amount you recieve(SPIRAL)</span>
								<p style={{ fontWeight: 'bold', color: 'red' }}>
									{convert} SPIRAL TOKEN
								</p>

								<Link to="/exchange" className="btn btn-success w-100">
									{' '}
									Exchange Now
									<i className="la la-arrow-right"></i>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
