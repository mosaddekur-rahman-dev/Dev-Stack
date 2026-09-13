import type { IStack } from "../types";
import StackCard from "./StackCard";

const AvailableStacks = ({
  stacks,
  selectedStack,
  setSelectedStack,
}: IStack) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-8">
      {stacks.map((stack: IStack, ind: number) => {
        return (
          <StackCard
            stack={stack}
            key={ind}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        );
      })}
    </div>
  );
};

export default AvailableStacks;
