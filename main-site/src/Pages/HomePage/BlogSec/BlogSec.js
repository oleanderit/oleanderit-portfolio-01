import React from "react";
import blog1 from "../../../asset/blogs/1.png";
import blog2 from "../../../asset/blogs/2.png";
import blog3 from "../../../asset/blogs/3.png";

const BlogSec = () => {
	const blogs = [
		{
			name: "Business Development Conferrence 2021",
			date: "25 September, 2021",
			author: "john doe",
			img: blog1,
		},
		{
			name: "Game Development Conferrence 2021",
			date: "25 September, 2021",
			author: "john doe",
			img: blog2,
		},
		{
			name: "Apps Development Conferrence 2021",
			date: "25 September, 2021",
			author: "john doe",
			img: blog3,
		},
	];

	return (
		<div className="about-sec bg-lightgray">
			<div className="container mx-auto py-5">
				<div className="d-flex align-items-center justify-content-between gap-5 py-3 flex-lg-row flex-column mx-auto">
					<div className="w-25">
						<div className="pb-5 mx-auto">
							<div>
								<p className="text-uppercase m-0 text-gray">BLOG POST</p>
								<h1 className="fw-bold mt-2">
									Latest <span className="text-blue">Post</span> from Blog
								</h1>
							</div>
						</div>
					</div>
					<div className="w-50">
						<p className="fw-normal fs-6">
							Pleasure rationally encounter consequences that are extremely
							painful. Nor again is there anyone who loves or pursues or desires
							to obtain
						</p>
					</div>
				</div>
				<div className="py-3 mx-auto">
					<div className="d-flex align-items-center justify-content-center py-3 gap-4 flex-lg-row flex-column">
						{blogs.map((blog, index) => (
							<div className="" key={index + blog.name}>
								<div className="card rounded-3 p-2">
									<img
										src={blog.img}
										className="card-img-top w-100"
										alt={blog.name}
									/>
									<div className="card-body">
										<p className="text-blue text-capitalize">
											<span>{blog.author}</span> - <span>{blog.date}</span>
										</p>
										<a
											href="/"
											className="card-title text-decoration-none text-dark fs-4"
										>
											{blog.name}
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogSec;
