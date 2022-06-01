import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressSec = () => {
  const percentage1 = 66;

	return (
		<>
			<div className="bg-blue progress-sec">
				<div className="container mx-auto py-5">
					<div className="py-3">
						<div className="w-75 mx-auto">
							<h2 className="fs-3 text-center">
								You can check out our work. Are you ready for a better, more
								productive business solutions
							</h2>
						</div>
            <div>
            <CircularProgressbar value={percentage1} text={`${percentage1}%`} />;
            </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProgressSec;
