import React from "react";
import CountUpSec from "./CountUpSec/CountUpSec";
import HeroSec from "./HeroSec/HeroSec";
import "./HomePage.css";

const HomePage = () => {
	return (
		<>
			<HeroSec />
			{/* <ServiceSec />
			<ProgressSec /> */}
			<CountUpSec />
		</>
	);
};

export default HomePage;
