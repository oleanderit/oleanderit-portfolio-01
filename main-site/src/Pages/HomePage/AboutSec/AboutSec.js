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
									<h1 className="fw-bold mt-2">
										Every Part of Your IT Ecosystem. Taken Care Of.
									</h1>
									<h5 className="d-flex my-4 heading-line">
										<span>Comprehensive care your cloud or on-premises infrastructure and applications:</span>
									</h5>  
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
