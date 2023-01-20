import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaTruckLoading } from "react-icons/fa";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { getAuth } from "firebase/auth";
import Spinner from "./Spinner";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const { loggedIn, checkingStatus } = useAuthStatus();
  const isMatched = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const onLoggout = () => {
    auth.signOut();
    navigate("/");
  };

  if (checkingStatus) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#DAF6FC] flex ip13:text-xl ip13:flex-col items-center justify-between self-center font-[Montserrat] font-medium ">
      <Link className="flex self-center justify-center ml-3" to="/">
        <FaTruckLoading className="text-blue-600 text-5xl mx-2" />
        <p className="text-2xl self-center pr-2">
          <span className="font-bold">Fast</span>Logic
        </p>
      </Link>
      <ul className="flex p-6 text-[#6B707F] text-center ">
        <li
          className={
            isMatched("/")
              ? `mx-7 hover:border-0`
              : `mx-7 hover:border-b-2 hover:border-[#10B3D6]`
          }
        >
          <Link
            className={
              isMatched("/")
                ? `text-[#10B3D6] border-b-2 border-[#10B3D6]`
                : `text-[#6B707F]`
            }
            to="/"
          >
            Home
          </Link>
        </li>
        {loggedIn ? (
          <div className="flex">
            <li
              className={
                isMatched("/orders")
                  ? `mx-7 hover:border-0`
                  : `mx-7 hover:border-b-2 hover:border-[#10B3D6]`
              }
            >
              <Link
                className={
                  isMatched("/orders")
                    ? `text-[#10B3D6] border-b-2 border-[#10B3D6]`
                    : `text-[#6B707F] border-none`
                }
                to="/orders"
              >
                Orders
              </Link>
            </li>
            <li
              className={
                isMatched("/orders")
                  ? `mx-7 hover:border-0`
                  : `mx-7 hover:border-b-2 hover:border-[#10B3D6]`
              }
            >
              <button onClick={onLoggout}>Logout</button>
            </li>
          </div>
        ) : (
          <li
            className={
              isMatched("/login")
                ? `mr-7 hover:border-0`
                : `mr-7 hover:border-b-2 hover:border-[#10B3D6]`
            }
          >
            <Link
              className={
                isMatched("/login")
                  ? `text-[#10B3D6] border-b-2 border-[#10B3D6]`
                  : `text-[#6B707F] border-none`
              }
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
