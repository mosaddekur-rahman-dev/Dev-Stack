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
    <div className="container mx-auto grid sm:grid-cols-3 grid-cols-1 sm:shrink gap-8">
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
