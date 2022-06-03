import React from "react";
import CountUpSec from "./CountUpSec/CountUpSec";
import AboutSec from "./AboutSec/AboutSec";
import BlogSec from "./BlogSec/BlogSec";
import HeroSec from "./HeroSec/HeroSec";
import "./HomePage.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import NewsLetter from "./NewsLetter/NewsLetter";
import ServiceSec from "./ServiceSec/ServiceSec";

const HomePage = () => {
	return (
		<>
			<HeroSec />
			{/* <ServiceSec />
			<ProgressSec /> */}
			<CountUpSec />
			<AboutSec />
			<ServiceSec />
			<BlogSec />
			<NewsLetter />
			{/* <ProgressSec /> */}
		</>
	);
};

export default HomePage;
