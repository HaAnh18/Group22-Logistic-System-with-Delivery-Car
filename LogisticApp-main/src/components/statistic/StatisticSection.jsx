import React, { useState } from "react";
import StatisticCard from "./StatisticCard";
import statistic from "../../data/statisticData";
import ScrollTrigger from "react-scroll-trigger";
import Openings from "../Openings";

const StatisticSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      {/* Statistic */}
      <div className="bg-[#DAF6FC] mt-7">
        <div className="flex justify-center items-center pt-5">
          <Openings
            title="Reasons to give us a try !!!"
            body="What we have archived in 2022"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-5 py-16 lg:px-20 md:flex-row">
          {counterOn &&
            statistic.length > 0 &&
            statistic.map((item, index) => (
              <StatisticCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                unit={item.unit}
                key={index}
              />
            ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default StatisticSection;
