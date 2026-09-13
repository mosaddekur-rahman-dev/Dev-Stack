import { toast } from "react-toastify";

const Aside = ({ selectedStack, setSelectedStack }) => {
  const handleRemoveStack = (stack) => {
    const restStacks = selectedStack.filter((selectedStack) => {
      return selectedStack.name !== stack.name;
    });
    setSelectedStack(restStacks);
    toast.error("Stack Deleted");
  };

  const handleRemoveStacks = () => {
    toast.error("Stacks Deleted");
    setSelectedStack([]);
  };

  return (
    <div>
      <div className="w-80 grid grid-cols-1">
        <div>
          <h2 className="font-bold text-2xl mb-3">Your Stack</h2>
          <p className="mb-8">{`${selectedStack.length} Technology Selected yet`}</p>
        </div>
        <div>
          {selectedStack.map((stack) => {
            return (
              <div>
                <li className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <img src={stack.icon} alt="Stack Icon" className="w-10" />
                    <div>
                      <h2>{stack.name}</h2>
                      <p>{stack.category}</p>
                    </div>
                  </div>
                  <button
                    className="pointer-cursor"
                    onClick={() => handleRemoveStack(stack)}>
                    X
                  </button>
                </li>
              </div>
            );
          })}
          <button
            className="w-full mt-7 border border-solid border-pink-400 rounded-2xl py-1"
            onClick={() => handleRemoveStacks()}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
