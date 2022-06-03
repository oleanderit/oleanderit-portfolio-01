import emailjs from "@emailjs/browser";
import React from "react";
import swal from "sweetalert";
import "./ContactUsPage.css";

const ContactUsPage = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_36f22ph",
				"template_y3vziub",
				e.target,
				"NWS5TAkjxdA2opJMB"
			)
			.then(
				(result) => {
					swal("Good job!", "From submitted", "success");
					e.reset();
				},
				(error) => {
					swal("Good job!", "Something is wrong", "warning");
					e.reset();
				}
			);
	};

	return (
		<div className="contact-sec py-5">
			<div className="container mx-auto py-5">
				<div className="contact-form mx-auto">
					<div className="contact-image">
						<img
							src="https://image.ibb.co/kUagtU/rocket_contact.png"
							alt="rocket_contact"
						/>
					</div>
					<form onSubmit={sendEmail}>
						<h3>Drop Us a Message</h3>
						<div className="row d-flex align-items-center flex-column flex-lg-row">
							<div className="col-md-6">
								<div className="form-group my-4">
									<input
										type="text"
										name="from_name"
										className="form-control"
										placeholder="Your Name *"
										required
									/>
								</div>
								<div className="form-group my-4">
									<input
										type="email"
										name="from_email"
										className="form-control"
										placeholder="Your Email *"
										required
									/>
								</div>
								<div className="form-group my-4">
									<input
										type="text"
										name="from_phone"
										className="form-control"
										placeholder="Your Phone Number *"
										required
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<textarea
										name="message"
										className="form-control"
										placeholder="Your Message *"
										style={{
											height: "170px",
											width: "100%",
										}}
										required
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
