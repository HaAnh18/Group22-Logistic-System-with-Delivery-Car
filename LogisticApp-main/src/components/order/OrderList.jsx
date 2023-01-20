import orderData from "../../data/orderData";
import OrderItem from "./OrderItem";
function OrderList() {
  return (
    <div className="flex flex-col md:flex-row mx-12 gap-x-4">
      {orderData.map((item) => {
        return (
          <OrderItem id={item.id} name={item.name} picURL={item.picURL} key={item.id} />
        );
      })}
      <div></div>
    </div>
  );
}

export default OrderList;
