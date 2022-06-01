import React from "react";
import HeroSec from "./HeroSec/HeroSec";
import "./HomePage.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import ProgressSec from "./ProgressSec/ProgressSec";
import ServiceSec from "./ServiceSec/ServiceSec";

const HomePage = () => {
	return (
		<>
			<NavigationBar />
			<HeroSec />
			<ServiceSec />
			<ProgressSec />
		</>
	);
};

export default HomePage;
