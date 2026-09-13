const StackCard = ({ stacks }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm z-[-1] ">
      <div className="flex justify-between items-center pt-8 px-5 mb-4">
        <figure>
          <img src={stacks.icon} alt={`${stacks.name} Icon`} className="w-15" />
        </figure>
        <button className="btn ">{stacks.badge}</button>
      </div>
      <div className="card-body text-[#64748B]">
        <h2 className="card-title font-semibold text-2xl mb-5">
          {stacks.name}
        </h2>
        <p>{stacks.description}</p>
        <div className="flex justify-between mt-6 mb-6">
          <span className="bg-[#F1F5F9] rounded-sm p-2">{stacks.category}</span>
          <span>{stacks.difficulty}</span>
          <span>⭐ {stacks.rating}</span>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#0A0F1D] text-white w-full">
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
