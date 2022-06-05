// import React from "react";
// import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const ProgressSec = () => {
// 	const percentageOfServices = [
// 		{
// 			name: "team support",
// 			value: 40,
// 		},
// 		{
// 			name: "project complete",
// 			value: 75,
// 		},
// 		{
// 			name: "success rate",
// 			value: 80,
// 		},
// 		{
// 			name: "good review",
// 			value: 95,
// 		},
// 	];

// 	return (
// 		<>
// 			<div className="bg-blue progress-sec">
// 				<div className="container mx-auto py-5">
// 					<div className="py-3">
// 						<div className="w-75 mx-auto">
// 							<h2 className="fs-3 text-center">
// 								You can check out our work. Are you ready for a better, more
// 								productive business solutions
// 							</h2>
// 						</div>
// 						<div>
// 							<div className="row align-items-center">
// 								{percentageOfServices.map((percentage, index) => (
// 									<div
// 										className="col col-md-2 col-lg-3 px-4 py-5"
// 										key={index + percentage.name}
// 									>
// 										<div className="h-50 w-50">
// 											<CircularProgressbar
// 												value={percentage.value}
// 												text={`${percentage.value}%`}
// 												styles={buildStyles({
											
// 													// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
// 													strokeLinecap: 'butt',
											
// 													// Text size
// 													textSize: '16px',
											
// 													// How long animation takes to go from one percentage to another, in seconds
// 													pathTransitionDuration: 0.5,
											
// 													// Can specify path transition in more detail, or remove it entirely
// 													// pathTransition: 'none',
											
// 													// Colors
// 													pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
// 													textColor: '#f88',
// 													trailColor: '#d6d6d6',
// 													backgroundColor: '#3e98c7',
// 												})}
// 											/>
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default ProgressSec;
