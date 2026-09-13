import { use } from "react";
import type { IStack } from "../types";
import AvailableStacks from "./AvailableStack";

interface StacksProps {
  stacksPromise: Promise<IStack[]>;
}

const Stack = ({ stacksPromise }: StacksProps) => {
  const stacks = use(stacksPromise);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-[18px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="container mx-auto">
        <div>
          <AvailableStacks stacks={stacks} />
        </div>
        <aside></aside>
      </div>
    </>
  );
};

export default Stack;
