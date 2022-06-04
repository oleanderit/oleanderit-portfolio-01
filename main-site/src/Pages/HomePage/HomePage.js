import React from "react";
import CountUpSec from "./CountUpSec/CountUpSec";
import AboutSec from "./AboutSec/AboutSec";
import BlogSec from "./BlogSec/BlogSec";
import "./HomePage.css";
import ServiceSec from "./ServiceSec/ServiceSec";
import HeroSec from "./HeroSec/HeroSec";

const HomePage = () => {
	return (
		<>
			<HeroSec ></HeroSec>
			<CountUpSec />
			<AboutSec />
			<ServiceSec />
			<BlogSec />
			{/* <ProgressSec /> */}
		</>
	);
};

export default HomePage;
