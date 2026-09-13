import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto mt-20 mb-20">
      <hr className="text-gray-100 mb-20" />
      <div className="container grid grid-cols-4 gap-30">
        <div className="flex flex-col gap-5">
          <img src={Logo} alt="Dev Stack Logo" className="w-40" />
          <p className="mb-10">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-10 font-semibold">
            <button>Github</button>
            <button>Twitter</button>
            <button>LinkedIn</button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold">PRODUCT</h2>
          <ul className="listStyle-none flex flex-col gap-3">
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold">COMPANY</h2>
          <ul className="listStyle-none flex flex-col gap-3">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold">LEGAL</h2>
          <ul className="listStyle-none flex flex-col gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
