import { Link } from "react-router-dom";
import LogoImage from "../../assets/svg/r4m.svg";

const Logo = () => {
  return (
    <>
      <Link to="/" className="-m-1.5 p-1.5">
        <span className="sr-only">R4M</span>
        {/* <img className="h-14 w-auto" src={LogoImage} alt="R4M logo" /> */}
        <img src={LogoImage} className="h-14 w-auto" alt="R4M logo" />
      </Link>
    </>
  );
};

export default Logo;
