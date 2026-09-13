Name of the project: Web Dev

Description: A webpage where you can add your web dev stacks.

Technology used: 
1. React.js
2. Tailwind CSS, DaisyUI
3. TypeScript / JavaScript (ES6+)
4. React-Toastify (NPM Package)
5.JSON (for technology data)
6. Vite (build tool)


Features: 
1. You can choose and add your stacks
2. You can remove your stacks
3. Shows warning signs


Question and Answers:

  1. What is JSX, and why is it used in React?
     Ans:  JSX is a javascript extension where i can combine javascript with html
  2. What is the difference between props and state?
     Ans: Pros is like a argument passed into a component and state is like a variable which can be updated later with useState.
  3. What does the `useState` hook do, and where did you use it in this project?
     Ans: "useState" hook can be used to make changes is a state of a variable assigned in the 'useState' variable and set to a new value.
  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
     Ans: 'useEffect' hook can be used to fetch data from json data and also to setup event listener. Although i did not use 'useEffect' hook in this project.
  5. Why does every item in a `.map()` list need a unique `key` prop?
     Ans: Every time a 'key' prop is required for React to keep track of what items were added, removed or updated.
  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
     Ans: Conditional rendering is rendering a component or an element based on a condition. I used it in my StacCard component to change the class names based on a condition and render      the component based on the class.
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
     Ans: React works in a uni-directional way. So I can use props to send data from the parent component to the child component and not the other way around. But the child can not           directly send data to the parent, rather parent sends functions to the child through props.  


