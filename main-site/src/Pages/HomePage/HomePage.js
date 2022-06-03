import React from "react";
import CountUpSec from "./CountUpSec/CountUpSec";
import HeroSec from "./HeroSec/HeroSec";
import "./HomePage.css";
import NavigationBar from "./NavigationBar/NavigationBar";

const HomePage = () => {
	return (
		<>
			<NavigationBar />
			<HeroSec />
			{/* <ServiceSec />
			<ProgressSec /> */}
			<CountUpSec />
		</>
	);
};

export default HomePage;
