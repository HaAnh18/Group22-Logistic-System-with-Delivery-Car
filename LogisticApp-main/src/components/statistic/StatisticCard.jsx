import React from "react";
import CountUp from "react-countup";

const StatisticCard = ({ icon, title, description, unit }) => {
	return (
		<div className="shadow-2xl bg-white text-black transition-all cursor-pointer duration-300 hover:-translate-y-2 w-4/5 mx-auto h-[200px] lg:h-[250px] rounded-lg p-4 flex flex-col gap-3 md:gap-4 items-center justify-center space-y-6">
			{/* Icon */}
			<div className="text-3xl">{icon}</div>

			{/* Statistic */}
			<div className="flex flex-col gap-2 text-center">
				<h3 className="text-2xl font-semibold md:text-3xl lg:text-6xl text-[#10B3D6]">
					<CountUp end={title * 1} duration={3} />
					{unit != "number" && unit}
				</h3>
				<p className="text-xl font-semibold lg:text-3xl">{description}</p>
			</div>
		</div>
	);
};

export default StatisticCard;
