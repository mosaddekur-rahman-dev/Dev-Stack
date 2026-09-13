import StackCard from "./StackCard";

const AvailableStacks = ({ stacks }) => {
  console.log(stacks, "from available stacks");
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {stacks.map((stack, ind) => {
        return <StackCard stacks={stack} key={ind} />;
      })}
    </div>
  );
};

export default AvailableStacks;
