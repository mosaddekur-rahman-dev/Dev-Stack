import StackCard from "./StackCard";

const AvailableStacks = ({ stacks }) => {
  console.log(stacks, "from available stacks");
  return (
    <div className="container mx-auto grid grid-cols-3">
      {stacks.map((stack) => {
        return <StackCard stacks={stack} />;
      })}
    </div>
  );
};

export default AvailableStacks;
