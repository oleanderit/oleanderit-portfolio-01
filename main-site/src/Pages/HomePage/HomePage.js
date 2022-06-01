import React from "react";
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
		</>
	);
};

export default HomePage;
