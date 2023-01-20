import Openings from "../Openings";
import cardData from "../../data/cardData";
import StepCard from "./StepCard";
function StepSection() {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center pt-5">
        <Openings
          title="How our service work?"
          body="3-step simplify. Make it easy for your life"
        />
      </div>
      <div className="grid gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center px-5 py-16 lg:px-20">
        {cardData.map((item, key) => {
          return (
            <StepCard
              id={item.id}
              body={item.body}
              icon={item.icon}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StepSection;
