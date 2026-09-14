import logo from "../assets/hamburger.png";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="bg-white sticky top-0 py-0.5 shadow z-1">
      <div className="container mx-auto ">
        <nav className="flex justify-between md:gap-8 my-7 items-center sticky">
          <img src={Logo} alt="Dev Stack Logo" className="hidden md:block" />
          <img src={logo} alt="Hamburger Logo" className="md:hidden pl-3" />
          <ul className="hidden md:flex justify-between gap:3 md:gap-2 lg:gap-8 text-md md:text-xl text-[#475569]  ">
            <li>
              <span className="text-[#DB2777]">Home</span>
            </li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-2">
            <button className="btn rounded-[100px] px-8">Sign In</button>
            <button className="btn btn-secondary rounded-[100px] px-8">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
