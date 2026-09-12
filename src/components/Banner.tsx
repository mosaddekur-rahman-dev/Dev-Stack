import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="grid grid-cols-2 items-center gap-26">
        <div className="flex-col">
          <div className="mb-8">
            <h1 className="text-5xl font-bold">Build your Ideal</h1>
            <span className="text-5xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </div>
          <p className="w-125 mb-12">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-3 ">
            <button className="btn btn-md rounded-[10px] bg-linear-to-r from-[#F97316] to-[#EC4899] w-40 text-[13px] text-white">
              Explore Technologies
            </button>
            <button className="btn btn-md rounded-[10px] w-40 text-[13px]">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={banner} alt="Banner Logo" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
