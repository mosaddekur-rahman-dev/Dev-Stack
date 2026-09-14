import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import type { IStack } from "../types";

interface IStackCardProps {
  stack: IStack;
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const StackCard = ({
  stack,
  selectedStack,
  setSelectedStack,
}: IStackCardProps) => {
  const isSelected = selectedStack.some((item) => item.id === stack.id);

  const handleSelectedStack = () => {
    toast.success("Stack Added");
    setSelectedStack([...selectedStack, stack]);
  };

  return (
    <div
      className={`card bg-base-100  shadow-sm ${isSelected ? "border" : "border-none"} ${isSelected ? "border-solid" : "border-none"} ${isSelected ? "border-pink-200" : "border-none"}`}>
      <div className="flex justify-between items-center pt-8 px-5 mb-4">
        <figure>
          <img src={stack.icon} alt={`${stack.name} Icon`} className="w-15" />
        </figure>
        <button className="btn rounded-3xl bg-pink-100  text-pink-500">
          {stack.badge}
        </button>
      </div>
      <div className="card-body text-[#64748B]">
        <h2 className="card-title font-semibold text-2xl mb-5">{stack.name}</h2>
        <p>{stack.description}</p>
        <div className="flex justify-between mt-6 mb-6">
          <span className="bg-[#F1F5F9] rounded-sm p-2">{stack.category}</span>
          <span>{stack.difficulty}</span>
          <span>⭐ {stack.rating}</span>
        </div>
        <div className="card-actions">
          <button
            className={`btn ${isSelected ? "bg-pink-50" : "bg-black"} ${isSelected ? "text-pink-500" : "text-white"} w-full py-5 rounded-lg`}
            onClick={() => handleSelectedStack()}
            disabled={isSelected === true ? true : false}>
            {isSelected === true ? `☑️Added to Stack` : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
