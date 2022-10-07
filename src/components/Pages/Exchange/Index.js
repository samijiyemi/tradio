/** @format */

import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';

const Index = (props) => {
	const [copySuccess, setCopySuccess] = useState('');
	const textAreaRef = useRef(null);

	function copyToClipboard(e) {
		e.preventDefault();

		textAreaRef.current.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus();
		// setCopySuccess('Copied!');
		alert('copied');
	}

	return (
		<div>
			<div className="header dashboard">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
								<Link className="navbar-brand" to="dashboard.html">
									<img src="./images/logo.png" alt="" />
								</Link>

								<div className="header-right d-flex my-2 align-items-center">
									<div className="language">
										<div className="dropdown">
											<div className="icon" data-toggle="dropdown">
												<i className="flag-icon flag-icon-us"></i>
												<span>English</span>
											</div>
											<div className="dropdown-menu dropdown-menu-end">
												<Link to="#" className="dropdown-item">
													<i className="flag-icon flag-icon-bd"></i> Bengali
												</Link>
												<Link to="#" className="dropdown-item">
													<i className="flag-icon flag-icon-fr"></i> French
												</Link>
												<Link to="#" className="dropdown-item">
													<i className="flag-icon flag-icon-cn"></i> China
												</Link>
											</div>
										</div>
									</div>
									<div className="dashboard_log">
										<div className="profile_log dropdown">
											<div className="user" data-toggle="dropdown">
												<span className="thumb">
													<i className="mdi mdi-account"></i>
												</span>
												<span className="arrow">
													<i className="la la-angle-down"></i>
												</span>
											</div>

											<div className="dropdown-menu dropdown-menu-end">
												<div className="user-email">
													<div className="user">
														<i className="thumb">
															<i className="mdi mdi-account"></i>
														</i>
														<div className="user-info">
															<h6>Saiful Islam</h6>
															<span>quixlab.com@gmail.com</span>
														</div>
													</div>
												</div>

												<div className="user-balance">
													<div className="available">
														<p>Available</p>
														<span>0.00 USD</span>
													</div>
													<div className="total">
														<p>Total</p>
														<span>0.00 USD</span>
													</div>
												</div>
												<Link
													to="account-overview.html"
													className="dropdown-item"
												>
													<i className="mdi mdi-account"></i> Account
												</Link>
												<Link to="data-tbi.html" className="dropdown-item">
													<i className="mdi mdi-history"></i> History
												</Link>
												<Link to="settings.html" className="dropdown-item">
													<i className="mdi mdi-settings"></i> Setting
												</Link>
												<Link to="lock.html" className="dropdown-item">
													<i className="mdi mdi-lock"></i> Lock
												</Link>
												<Link to="signin.html" className="dropdown-item logout">
													<i className="mdi mdi-logout"></i> Logout
												</Link>
											</div>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<div className="sidebar">
				<div className="menu">
					<ul>
						<li>
							<Link
								to="index.html"
								data-toggle="tooltip"
								data-placement="right"
								title="Trade"
							>
								<span>
									<i className="mdi mdi-view-dashboard"></i>
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="exchange.html"
								data-toggle="tooltip"
								data-placement="right"
								title="Exchange"
							>
								<span>
									<i className="mdi mdi-tumblr-reblog"></i>
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="account-overview.html"
								data-toggle="tooltip"
								data-placement="right"
								title="Accounts"
							>
								<span>
									<i className="mdi mdi-face-profile"></i>
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="data-tbi.html"
								data-toggle="tooltip"
								data-placement="right"
								title="Data"
							>
								<span>
									<i className="mdi mdi-database"></i>
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="settings.html"
								data-toggle="tooltip"
								data-placement="right"
								title="Setting"
							>
								<span>
									<i className="mdi mdi-settings"></i>
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="page-title dashboard">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="page-title-content">
								<p>
									Welcome Back,
									<span> Saiful Islam</span>
								</p>
							</div>
						</div>
						<div className="col-6">
							<ul className="text-end breadcrumbs list-unstyle">
								<li>
									<Link to="./settings.html">Settings </Link>
								</li>
								<li className="active">
									<Link to="#">Security</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="content-body">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="card sub-menu">
								<div className="card-body">
									<ul className="d-flex">
										<li className="nav-item">
											<Link to="./account-overview.html" className="nav-link">
												<i className="mdi mdi-bullseye"></i>
												<span>Overview</span>
											</Link>
										</li>
										<li className="nav-item">
											<Link to="./account-deposit.html" className="nav-link">
												<i className="mdi mdi-heart"></i>
												<span>Deposit</span>
											</Link>
										</li>
										<li className="nav-item">
											<Link to="./account-withdraw.html" className="nav-link">
												<i className="mdi mdi-pentagon"></i>
												<span>Withdraw</span>
											</Link>
										</li>
										<li className="nav-item">
											<Link to="./account-api.html" className="nav-link">
												<i className="mdi mdi-database"></i>
												<span>API</span>
											</Link>
										</li>
										<li className="nav-item">
											<Link to="./account-affiliate.html" className="nav-link">
												<i className="mdi mdi-diamond"></i>
												<span>Affiliate</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Cold Wallet Deposit Address</h4>
									<span style={{ fontWeight: 'bold', color: 'red' }}>
										All Payment Should be made in BTC
									</span>
								</div>
								<div className="card-body" id="deposits">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<Link
												className="nav-link active"
												data-toggle="tab"
												to="#tab1"
											>
												TUSD
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" data-toggle="tab" to="#tab2">
												USDC
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" data-toggle="tab" to="#tab3">
												FIAT
											</Link>
										</li>
									</ul>
									<div className="tab-content">
										<div className="tab-pane fade show active" id="tab1">
											<div className="qrcode">
												<img src="./images/qr.svg" alt="" width="150" />
											</div>
											<form action="">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														ref={textAreaRef}
														value="bc1qn6rh5u3m6uxqc2xa7ecfhp8ppktc4g9lrme0tg"
													/>
													<div className="input-group-append">
														<button
															className="input-group-text bg-primary text-white"
															onClick={copyToClipboard}
														>
															Copy
														</button>
														{copySuccess}
													</div>
												</div>
											</form>

											<ul>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													SPIRAL Token will be credited to your Tradio account
													after 25 network confirmations.
												</li>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													TUSD deposits to this address are unlimited. Note that
													you may not be able to withdraw all of your funds at
													once if you deposit more than your daily withdrawal
													limit.
												</li>
											</ul>
										</div>
										<div className="tab-pane fade" id="tab2">
											<div className="qrcode">
												<img src="./images/qr.svg" alt="" width="150" />
											</div>
											<form action="">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														ref={textAreaRef}
														value="bc1qn6rh5u3m6uxqc2xa7ecfhp8ppktc4g9lrme0tg"
													/>
													<div className="input-group-append">
														<button className="input-group-text bg-primary text-white">
															Copy
														</button>
													</div>
												</div>
											</form>

											<ul>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													USDC network transfers will be credited to your Tradio
													account after 25 network confirmations.
												</li>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													USDC deposits to this address are unlimited. Note that
													you may not be able to withdraw all of your funds at
													once if you deposit more than your daily withdrawal
													limit.
												</li>
											</ul>
										</div>
										<div className="tab-pane fade" id="tab3">
											<div className="qrcode">
												<img src="./images/qr.svg" alt="" width="150" />
											</div>
											<form action="">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4"
													/>
													<div className="input-group-append">
														<span className="input-group-text bg-primary text-white">
															Copy
														</span>
													</div>
												</div>
											</form>

											<ul>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													USDC network transfers will be credited to your Tradio
													account after 25 network confirmations.
												</li>
												<li>
													<i className="mdi mdi-checkbox-blank-circle"></i>
													USDC deposits to this address are unlimited. Note that
													you may not be able to withdraw all of your funds at
													once if you deposit more than your daily withdrawal
													limit.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer dashboard">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-8 col-12">
							<div className="copyright">
								<p>
									© Copyright
									<script>
										var CurrentYear = new Date().getFullYear()
										document.write(CurrentYear)
									</script>{' '}
									<Link to="/">Tradio</Link> I All Rights Reserved
								</p>
							</div>
						</div>
						<div className="col-sm-4 col-12">
							<div className="footer-social">
								<ul>
									<li>
										<Link to="#">
											<i className="fa fa-facebook"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-linkedin"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-youtube"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
