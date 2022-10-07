/** @format */
const App = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="navigation">
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<a className="navbar-brand" href="index.html">
									<img src="./images/logo.png" alt="" />
								</a>
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className="collapse navbar-collapse"
									id="navbarNavDropdown"
								>
									<ul className="navbar-nav">
										<li className="nav-item">
											<a className="nav-link" href="#" data-scroll-nav="0">
												Home
											</a>
										</li>

										<li className="nav-item">
											<a className="nav-link" href="#" data-scroll-nav="3">
												Testimonial
											</a>
										</li>

										<li className="nav-item">
											<a className="nav-link" href="#" data-scroll-nav="6">
												Support
											</a>
										</li>

										<li className="nav-item">
											<a className="nav-link" href="./dashboard.html">
												Dashboard
											</a>
										</li>
									</ul>
								</div>

								<div className="signin-btn">
									<a className="btn btn-primary" href="./signin.html">
										Sign in
									</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
