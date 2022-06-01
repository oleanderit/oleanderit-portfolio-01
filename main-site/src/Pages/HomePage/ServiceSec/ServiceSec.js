import React from "react";
import ITpng from "../../../asset/services/it.png";

const ServiceSec = () => {
	const services = [
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
		{
			name: "IT Solutions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur!",
			img: ITpng,
		},
	];

	return (
		<>
			<div className="bg-white">
				<div className="container mx-auto py-5">
					<div>
						<div className="text-center">
							<h5 className="display-6 text-orange fs-3 text-uppercase">Our Services</h5>
							<p className="fs-4">
								Lorem ipsum dolor sit, amet consectetur adipisicing
							</p>
						</div>
						<div className="mt-5">
							<div className="row gap-5 justify-content-center">
								{services.map((service, index) => (
									<div className="col col-md-2 col-lg-3 px-3 py-5 services-card" key={index + service.name}>
										<div>
											<div className="text-center">
												<img
													className=""
													height="100px"
													src={service.img}
													alt={service.name}
												/>
											</div>
											<div className="text-center my-3 fs-4">{service.name}</div>
											<div className="text-center fs-6 pb-3 fw-light">{service.desc}</div>
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
