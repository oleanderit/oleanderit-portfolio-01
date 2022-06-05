import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../../asset/hero.png";

const HeroSec = () => {
	return (
		<>
			<div className="hero-sec">
				<div className="container mx-auto py-5">
					<div className="row flex-lg-row-reverse align-items-center justify-content-center py-5">
						<div className="col-10 col-sm-8 col-lg-6">
							<img
								src={heroImg}
								className="d-block mx-lg-auto img-fluid"
								alt="hero_sec"
							/>
						</div>
						<div className="col-lg-6">
							<h1 className="display-6 fw-bold lh-1 mb-3">
								Welcome to Oleander IT
							</h1>
							<p className="lead m-0">Best web development agency</p>
							<p className="lead">with 100% satisfied guarantee</p>
							<div className="d-grid gap-2 d-md-flex justify-content-md-start">
								<Link to="/" className="btn btn-orange btn-lg px-4 me-md-2">
									Learn more
								</Link>
								<Link to="/" className="btn btn-outline-secondary btn-lg px-4">
									Get started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSec;
