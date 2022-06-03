import React from "react";
import about from "../../../asset/about.svg";
import service1 from "../../../asset/services/1.png";
import service2 from "../../../asset/services/2.png";
import service3 from "../../../asset/services/3.png";
import service4 from "../../../asset/services/4.png";
import service5 from "../../../asset/services/5.png";
import service6 from "../../../asset/services/6.png";

const ServiceSec = () => {
	const services01 = [
		{
			img: service1,
			name: "Web design",
			desc: "This is the perfect place to find a nice and cozy.",
		},
		{
			img: service2,
			name: "web development",
			desc: "This is the perfect place to find a nice and cozy.",
		},
		{
			img: service3,
			name: "website maintenance",
			desc: "This is the perfect place to find a nice and cozy.",
		},
	];

	const services02 = [
		{
			img: service4,
			name: "SEO",
			desc: "This is the perfect place to find a nice and cozy.",
		},
		{
			img: service5,
			name: "software design",
			desc: "This is the perfect place to find a nice and cozy.",
		},
		{
			img: service6,
			name: "website Marketing",
			desc: "This is the perfect place to find a nice and cozy.",
		},
	];

	return (
		<>
			<div className="service-sec">
				<div className="container mx-auto py-5">
					<div className="pb-5 mx-auto">
						<div className="text-center">
							<p className="text-uppercase m-0 text-gray">SERVICES</p>
							<h1 className="fw-bold mb-2">
								Explore <span className="text-blue">our</span> Services
							</h1>
							<p className="fs-5">
								Pleasure rationally encounter consequences that are painful.{" "}
								<br />
								Nor again is there anyone who pursues
							</p>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-center gap-5 flex-lg-row flex-column mx-auto">
						<div className="">
							<div className="">
								{services01.map((service01, index) => (
									<div
										className="d-flex flex-column py-3"
										key={service01.name + index}
									>
										<div className="pb-3">
											<img src={service01.img} alt={service01.name} />
										</div>
										<div className="">
											<h3 className="text-capitalize">{service01.name}</h3>
											<p>{service01.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="">
							<div className="text-center">
								<img src={about} alt="about_img" className="h-full w-100" />
							</div>
						</div>
						<div className="">
							<div className="">
								{services02.map((service02, index) => (
									<div
										className="d-flex flex-column py-3"
										key={service02.name + index}
									>
										<div className="pb-3">
											<img src={service02.img} alt={service02.name} />
										</div>
										<div className="">
											<h3 className="text-capitalize">{service02.name}</h3>
											<p>{service02.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceSec;
