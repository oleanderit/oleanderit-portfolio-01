import React from "react";

const NewsLetter = () => {
	return (
		<>
			<div className="container mx-auto py-5">
				<div className="">
					<form className="d-flex justify-content-between align-items-center g-3">
						<h3 className="text-capitalize m-0">
							Subscribe to our news letter
						</h3>
						<div className="d-flex w-50">
							<input
								type="password"
								className="form-control form-control-lg rounded-0"
								id="inputPassword"
								placeholder="Password"
							/>
							<button
								type="submit"
								className="btn btn-blue rounded-0 text-uppercase"
							>
								subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default NewsLetter;
