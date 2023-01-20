import { Link } from "react-router-dom";

function OrderItem({id, name, picURL }) {
  return (
    <Link to={`/orders/${id}`} className="rounded-xl hover:-translate-y-2 transition-all cursor-pointer duration-300 shadow-lg border-[5px] border-[#10B3D6] flex flex-col justify-between w-full mx-auto mt-4 h-[400px]">
      <div className="h-2/3 flex items-center">{picURL}</div>
      <h1 className="rounded-b-md font-bold p-3 text-xl sm:text-2xl bg-[#DAF6FC]">
        {name}
      </h1>
    </Link>
  );
}

export default OrderItem;
