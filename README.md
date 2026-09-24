# B-14-Assignment-05

DevStack

DevStack is a modern, responsive web application designed for developers to explore frontend, backend, database, and tooling options, compare them side-by-side, and build their ideal development stack.

---

Technologies Used
- React (Component-based UI architecture)
- Vite (Lightning-fast frontend build tool)
- TypeScript (Strongly typed JavaScript for robust tooling)
- Tailwind CSS v4 (Utility-first CSS framework with custom gradients and responsive design)

---

Key Features
1. Interactive Technology Explorer: Browse through a comprehensive catalog of technologies categorized by frontend, backend, database, and tools with ratings and descriptions.
2. Dynamic Stack Builder: Select technologies per category to construct your custom development stack in real-time.
3. Responsive & Polished UX: Fully responsive layout equipped with a modern mobile drawer, custom pill buttons, and sleek brand gradients.

---

React Concept Questions & Answers

1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript. It allows us to write HTML-like markup directly inside our JavaScript files. It is used in React because it makes code easier to read, write, and maintain by combining UI structure and logic in one place.

2. What is the difference between props and state?
Props (properties) are passed down from a parent component to a child component and are read-only (immutable).
State is managed *inside* a component, can change over time based on user interactions, and triggers a re-render when updated.

3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to manage local state. In this project, it is used to handle UI states such as toggling the mobile navigation menu (`isOpen`) and managing the selected technologies in the stack builder.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets you perform side effects (like data fetching, subscriptions, or DOM manipulation) in functional components. It was needed to fetch and load the external `Tech.json` data asynchronously when the component first mounts.

5. Why does every item in a `.map()` list need a unique key prop?
React uses `key` props to efficiently identify which items in a list have changed, been added, or been removed. This optimizes the reconciliation process and prevents unnecessary re-rendering of entire lists.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is the process of rendering different UI elements or components based on certain conditions (using ternary operators or `&&`). For example, displaying an empty stack message when no technology is selected:```tsx
{selectedStack.length === 0 && <p>Your stack is empty.</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed down using props (e.g., <ChildComponent data={value} />).
Child to Parent: The parent passes a callback function down via props to the child. The child invokes that function with arguments to send data back up to the parent.
