import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mt-20 mb-5 pb-2 border-b border-b-gray-100 text-[#64748B]">
        <hr className="text-gray-100 mb-10" />
        <div className="container grid sm:grid-cols-5 gap-30 pb-10">
          <div className="conainer mx-auto flex flex-col justify-center items-center w-full sm:hidden mb-5 ">
            <img src={Logo} alt="Dev Stack Logo" className="w-40 mb-5" />
            <p className="mb-10 justify-center items-center text-center px-8">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-3 font-semibold mb-8 ">
              <button>Github</button>
              <button>.</button>
              <button>Twitter</button>
              <button>.</button>
              <button>LinkedIn</button>
            </div>
            <div className="container mx-auto flex justify-between mb-5 text-[#64748B] border-t border-gray-100 pt-5 px-5">
              <p>© 2026 Dev Stack. All rights reserved.</p>
              <div className="flex gap-7">
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-5 col-span-2">
            <img src={Logo} alt="Dev Stack Logo" className="w-40" />
            <p className="mb-10">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="hidden sm:flex gap-10 font-semibold">
              <button>Github</button>
              <button>Twitter</button>
              <button>LinkedIn</button>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-10 ">
            <h2 className="font-semibold">PRODUCT</h2>
            <ul className="listStyle-none flex flex-col gap-3">
              <li>Home</li>
              <li>Technologies</li>
              <li>Project</li>
            </ul>
          </div>
          <div className="hidden sm:flex flex-col gap-10">
            <h2 className="font-semibold">COMPANY</h2>
            <ul className="listStyle-none flex flex-col gap-3">
              <li>About</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="hidden sm:flex flex-col gap-10">
            <h2 className="font-semibold">LEGAL</h2>
            <ul className="listStyle-none flex flex-col gap-3">
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto hidden sm:flex sm:justify-between mb-5 text-[#64748B]">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-7">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
