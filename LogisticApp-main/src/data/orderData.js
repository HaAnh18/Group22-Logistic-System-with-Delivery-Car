import { ReactComponent as Gift } from "../components/pics/gift.svg";

const data = [
  {
    id: 1,
    name: "Mystery gift 1",
    picURL: <Gift fill="#F83E3E" stroke="black" className="w-2/3 m-auto h-full pt-6"/>,
  },
  {
    id: 2,
    name: "Mystery gift 2",
    picURL: <Gift fill="#9fc5e8" stroke="black" className="w-2/3 mx-auto h-full pt-6"/>,
  },
  {
    id: 3,
    name: "Mystery gift 3",
    picURL: <Gift fill="#ccff00" stroke="black" className="w-2/3 mx-auto h-full pt-6" />,
  },
];
export default data;
