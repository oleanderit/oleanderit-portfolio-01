import React from "react";
import CountUpSec from "./CountUpSec/CountUpSec"; 
import "./HomePage.css";
import ServiceSec from "./ServiceSec/ServiceSec";
import HeroSec from "./HeroSec/HeroSec";
import DemoSec from "./DemoSec/DemoSec";

const HomePage = () => {
	return (
		<>
			<HeroSec ></HeroSec>
			<CountUpSec />
			<ServiceSec />
			<DemoSec />
			{/* <ProgressSec /> */}
		</>
	);
};

export default HomePage;
