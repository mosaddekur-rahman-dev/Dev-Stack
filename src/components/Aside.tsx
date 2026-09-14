import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { IStack } from "../types";

interface IAsideProps {
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const Aside = ({ selectedStack, setSelectedStack }: IAsideProps) => {
  const handleRemoveStack = (stack: IStack) => {
    const restStacks = selectedStack.filter((item) => {
      return item.id !== stack.id;
    });
    setSelectedStack(restStacks);
    toast.error("Stack Deleted");
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("Stacks Cleared");
  };

  return (
    <div>
      <div className="w-60  md:visible border border-gray-300 p-5 rounded-2xl">
        <div>
          <h2 className="font-bold text-2xl mb-3">Your Stack</h2>
          <p className="mb-8">{`${selectedStack.length} Technology Selected`}</p>
        </div>
        <div>
          {selectedStack.length <= 0 ? (
            <div className="border border-solid border-gray-400 rounded-2xl">
              <p className="text-center py-5">Your stack is empty</p>
            </div>
          ) : (
            selectedStack.map((stack) => {
              return (
                <div
                  className="border border-gray-300 rounded-2xl p-2 mb-2"
                  key={stack.id}>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2">
                      <img src={stack.icon} alt="Stack Icon" className="w-10" />
                      <div>
                        <h2>{stack.name}</h2> <p>{stack.category}</p>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleRemoveStack(stack)}>
                      X
                    </button>
                  </div>
                </div>
              );
            })
          )}
          <button
            className={`w-full mt-7 border border-solid border-pink-400 rounded-2xl py-1 ${selectedStack.length > 0 ? "visible" : "hidden"}`}
            onClick={handleRemoveAll}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Aside;
