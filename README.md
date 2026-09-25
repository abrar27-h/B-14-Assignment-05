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
1. Interactive Technology Explorer:
   Browse through a comprehensive catalog of technologies categorized by frontend, backend, database, and tools with ratings and descriptions.
3. Dynamic Stack Builder:
   Select technologies per category to construct your custom development stack in real-time.
5. Responsive & Polished UX:
   Fully responsive layout equipped with a modern mobile drawer, custom pill buttons, and sleek brand gradients.

---

React Concept Questions & Answers


1. What is JSX, and why is it used in React?

JSX stands for (JavaScript XML). It is a syntax extension for JavaScript that allows us to write (HTML-like markup directly within JavaScript code).

JSX is used in React because it makes the UI structure easier to read and understand. It also allows us to keep the 
(UI structure and its logic together), which makes the code easier to develop and maintain.

---

2. What is the difference between props and state?

'Props' are data passed from a 'parent component to a child component'. They are read-only, meaning the child component 
cannot directly modify them.

'State', on the other hand, is data managed 'inside a component'. It can change over time, usually because of user 
interactions or other events. When the state changes, React re-renders the component to update the UI.

---

3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components in React to **create and manage local state**.

In this project, I used `useState` to manage different UI states, such as (opening and closing the mobile navigation 
menu using `isOpen`), and keeping track of the (technologies selected in the stack builder).

---

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to handle (side effects) in functional components. Examples of side effects include fetching data, 
setting up subscriptions, or interacting with external systems.

In this project, I used `useEffect` to (fetch and load the external `Tech.json` data when the component initially loads). 
This allows the application to retrieve the technology data asynchronously and then display it in the UI.

---

5. Why does every item in a `.map()` list need a unique `key` prop?

React requires a unique `key` for items rendered through `.map()` so that it can (identify each item efficiently).

When the list changes, React uses these keys to determine which items were (added, removed, or updated). This helps 
React update only the necessary parts of the UI instead of unnecessarily re-rendering the entire list.

---

6. What is conditional rendering? Show one place you used it.

'Conditional rendering' means displaying different UI elements depending on whether a certain condition is 
 true or false.

For example, in this project, I used conditional rendering to display a message when no technology has been 
selected:

```tsx
{selectedStack.length === 0 && <p>Your stack is empty.</p>}
```

Here, the message will only appear when `selectedStack.length` is equal to `0`.

---

7. How do you pass data from a parent component to a child component, and how does a child send something back
   to the parent?

Data is passed from a 'parent to a child component using props'. For example:

```tsx
<ChildComponent data={value} />
```

The child component can then access the `data` prop.

To send information from the 'child back to the parent', the parent can pass a 'callback function as a prop'. 
The child then calls that function with the required data.

For example:

```tsx
<ChildComponent onSelect={handleSelect} />
```

The child can call `onSelect(value)` to send the selected value back to the parent.
