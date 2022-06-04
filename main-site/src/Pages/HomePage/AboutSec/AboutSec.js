import React from "react";
import { Link } from "react-router-dom";
import chart from "../../../asset/chart.svg";
import "./AboutSec.css";

const AboutSec = () => {
	return (
		<>
			<div className="about-sec bg-lightgray">
				<div className="container mx-auto py-5">
					<div className="d-flex align-items-center justify-content-between gap-5 py-3 flex-lg-row flex-column mx-auto">
						<div>
							<div className="pb-5 mx-auto">
								<div>
									<p className="text-uppercase m-0 text-gray">About Us</p>
									<h1 className="fw-bold mt-2">
										Best <span className="text-blue">Digital Agency</span> in
										the Town
									</h1>
									<h5 className="d-flex my-4 heading-line">
										<span>Science 2021</span>
									</h5>
									<p className="m-0 mb-4 ">
										Pleasure rationally encounter consequences that are
										extremely painful. Nor again is there anyone who loves or
										pursues or desires to obtain
									</p>
									<q className="m-0 fw-bold">
										Pleasure rationally encounter consequences that are
										extremely painful. Nor again is there
									</q>
									<div className="mt-4">
										<Link to="/about" className="btn btn-blue rounded-pill">
											Learn more
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center">
							<img src={chart} alt="chart" className="w-80" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSec;
