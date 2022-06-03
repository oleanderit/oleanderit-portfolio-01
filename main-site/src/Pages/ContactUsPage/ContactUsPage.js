import React from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {



	return (
		<div className="contact-sec py-5">
			<div className="container mx-auto py-5">
				<div class="contact-form mx-auto">
					<div class="contact-image">
						<img
							src="https://image.ibb.co/kUagtU/rocket_contact.png"
							alt="rocket_contact"
						/>
					</div>
					<form method="post">
						<h3>Drop Us a Message</h3>
						<div class="row d-flex align-items-center flex-column flex-lg-row">
							<div class="col-md-6">
								<div class="form-group my-4">
									<input
										type="text"
										name="name"
										class="form-control"
										placeholder="Your Name *"
										value=""
									/>
								</div>
								<div class="form-group my-4">
									<input
										type="text"
										name="email"
										class="form-control"
										placeholder="Your Email *"
										value=""
									/>
								</div>
								<div class="form-group my-4">
									<input
										type="text"
										name="phone"
										class="form-control"
										placeholder="Your Phone Number *"
										value=""
									/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<textarea
										name="message"
										class="form-control"
										placeholder="Your Message *"
										style={{
											height: "170px",
											width: "100%",
										}}
									></textarea>
								</div>
							</div>
							<div className="mt-4 mt-md-0">
								<button type="submit" className="btn btn-blue w-full col-md-12">
									Send message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
