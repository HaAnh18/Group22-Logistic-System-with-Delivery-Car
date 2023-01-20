import HeroImage from "../pics/heroImg.jpg";
import Openings from "../Openings";
import { Link } from "react-router-dom";
import {useAuthStatus} from "../../hooks/useAuthStatus"
function HeroSection() {
  const {loggedIn, checkingStatus} = useAuthStatus();
  return (
    <>
      <div className=" bg-blue-300 h-[250px] md:h-[400px] lg:h-[600px] relative">
        <img
          src={HeroImage}
          className="mix-blend-overlay absolute object-cover w-full h-full"
        />
        <div className="absolute top-1/2 md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 text-center">
            <Openings title="Be a guy. By your side" body="Best delivery ever !!!"/>
            <Link className="btn btn-sm btn-secondary mx-auto my-4 md:text-2xl lg:text-3xl hover:btn-primary" to={loggedIn ? `/orders` : `/login`}>Get Started</Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
