import type { Dispatch, SetStateAction } from "react";
import type { IStack } from "../types";
import StackCard from "./StackCard";

interface IAvailableStacksProps {
  stacks: IStack[];
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const AvailableStacks = ({
  stacks,
  selectedStack,
  setSelectedStack,
}: IAvailableStacksProps) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-8">
      {stacks.map((stack: IStack) => {
        return (
          <StackCard
            key={stack.id}
            stack={stack}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        );
      })}
    </div>
  );
};

export default AvailableStacks;
