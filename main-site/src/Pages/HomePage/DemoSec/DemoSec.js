import React from 'react';
import { useNavigate } from "react-router-dom";
import blog1 from "../../../asset/blogs/1.png";
import blog2 from "../../../asset/blogs/2.png";
import blog3 from "../../../asset/blogs/3.png";
import './DemoSec.css'
const DemoSec = () => {
    const navigate = useNavigate();
    const blogs = [
        {
            name: "E Commerce Site",
            date: "25 September, 2021",
            author: "john doe",
            img: blog1,
        },
        {
            name: "Niche Website",
            date: "25 September, 2021",
            author: "john doe",
            img: blog2,
        },
        {
            name: "Travel Website",
            date: "25 September, 2021",
            author: "john doe",
            img: blog3,
        },
    ];
    const goToAllProjectPage = () => {
        navigate('/projects')
    }
    return (
        <div className="about-sec bg-lightgray">
            <div className="container mx-auto py-5">
                <div className="d-flex align-items-center justify-content-between py-3 flex-lg-row flex-column mx-auto">
                    <div className="w-100">
                        <div className="pb-2 mx-auto">
                            <div>
                                <h1 className="fw-bold mt-2">
                                    Our Demo<span className="text-blue ms-1">Project</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="DemoPng">
                        <img src="https://mentorphiledotcom.files.wordpress.com/2018/09/livedemo-1.png" alt="" width="100%" />
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
                <div className='d-flex justify-content-center'>
                    <button onClick={goToAllProjectPage}>See More</button>
                </div>
            </div>

        </div >
    );
};

export default DemoSec;