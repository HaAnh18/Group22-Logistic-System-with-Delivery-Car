import { useParams } from "react-router-dom";
import orderData from "../data/orderData";
import { ref, set } from "firebase/database";
import { realDb } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function OrderDetails() {
  const navigate = useNavigate();
  const [isBought, setIsBought] = useState(false);
  const param = useParams();
  const { orderId } = param;
  const buy = () => {
    console.log("buy");
    setIsBought(true);
    for (let i = 1; i < orderData.length + 1; i++) {
      if (i == orderId) {
        setTimeout(() => {
          set(ref(realDb, "MysteryGift/" + i), {
            Status: isBought,
          });
        }, 1000);
        set(ref(realDb, "MysteryGift/" + i), {
          Status: !isBought,
        });
      }

      // } else {
      //   set(ref(realDb, "MysteryGift/" + i), {
      //     Status: isBought,
      //   });
      // }
    }
    navigate("/");
  };
  for (let i = 0; i < orderData.length; i++) {
    if (orderData[i].id == orderId) {
      return (
        <>
          <div className="rounded-xl hover:-translate-y-2 transition-all cursor-pointer duration-300 shadow-lg border-[5px] border-[#10B3D6] flex flex-col justify-between ip13:w-4/5 sm:w-4/5 md:w-1/3 mx-auto mt-4 h-[400px]">
            <div className="h-2/3 flex items-center">{orderData[i].picURL}</div>
            <h1 className="rounded-b-md font-bold p-3 text-xl sm:text-2xl bg-[#DAF6FC]">
              {orderData[i].name}
            </h1>
          </div>
          <button
            onClick={buy}
            className="btn btn-primary ip13:w-4/5 sm:w-4/5 md:w-1/3 mx-auto hover:btn-secondary"
          >
            Order
          </button>
        </>
      );
    }
  }
}
export default OrderDetails;
