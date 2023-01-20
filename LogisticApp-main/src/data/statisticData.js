import { HiUserGroup } from "react-icons/hi";
import { FaTruckLoading } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const statisticData = [
  {
    icon: <FaTruckLoading className="text-3xl lg:text-5xl text-red-500 " />,
    title: 9999,
    description: "Orders",
    unit: "number",
  },
  {
    icon: <HiUserGroup className="text-3xl lg:text-5xl text-red-500" />,
    title: 2567,
    description: "Users",
    unit: "number",
  },
  {
    icon: <AiFillHeart className="text-3xl lg:text-5xl text-red-500" />,
    title: 98,
    description: "Like",
    unit: "%",
  },
];

export default statisticData;
