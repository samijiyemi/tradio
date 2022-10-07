/** @format */

const Footer = () => {
	return (
		<div>
			<div className="bottom section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="bottom-logo">
								<img className="pb-3" src="./images/logo.png" alt="" />

								<p>
									Fast and secure way to purchase or exchange 150+
									cryptocurrencies
								</p>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">Company</h4>
								<ul>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Career</a>
									</li>
									<li>
										<a href="#">Affiliate</a>
									</li>
									<li>
										<a href="#">Our Partner</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">Support</h4>
								<ul>
									<li>
										<a href="#">Ticket</a>
									</li>
									<li>
										<a href="#">FAQ</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Helpdesk</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="bottom-widget">
								<h4 className="widget-title">Exchange Pair</h4>
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
										<ul>
											<li>
												<a href="#">ETH to BTC</a>
											</li>
											<li>
												<a href="#">BTC to ETH</a>
											</li>
											<li>
												<a href="#">LTC to ETH</a>
											</li>
											<li>
												<a href="#">USDT to BTC</a>
											</li>
										</ul>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
										<ul>
											<li>
												<a href="#">BTC to USDT</a>
											</li>
											<li>
												<a href="#">LTC to BTC</a>
											</li>
											<li>
												<a href="#">XMR to BTC</a>
											</li>
											<li>
												<a href="#">ETC to DASH</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="copyright">
								<p>
									© Copyright
									<script>
										var CurrentYear = new Date().getFullYear()
										document.write(CurrentYear)
									</script>{' '}
									<a href="#">Tradio</a> I All Rights Reserved
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="footer-social">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-youtube"></i>
										</a>
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

export default Footer;
