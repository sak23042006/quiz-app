const questions = [
    {
      text: "What is React.js primarily used for?",
      options: [
        { id: 0, text: "Server-side scripting", isCorrect: false },
        { id: 1, text: "Database management", isCorrect: false },
        { id: 2, text: "User interface development", isCorrect: true },
        { id: 3, text: "Network protocols", isCorrect: false },
      ],
      ans:3,
    },
  
    {
      text: "In React.js, what is the purpose of `JSX` ?",
      options: [
        { id: 0, text: "JavaScript extension for XML", isCorrect: true },
        { id: 1, text: "JSON extraction syntax", isCorrect:  false },
        { id: 2, text: "Java XML syntax", isCorrect:  false },
        { id: 3, text: "JavaScript XML serializer", isCorrect:  false },
      ],
      ans:1,
    },

    {
      text: "How does React handle component communication?",
      options: [
        { id: 0, text: "Through global variables", isCorrect:  false },
        { id: 1, text: "Using callbacks", isCorrect: false },
        { id: 2, text: "Via direct DOM manipulation", isCorrect:  false },
        { id: 3, text: "With state and props", isCorrect: true },
      ],
      ans:4,
    },
    
    {
      text: "What is the virtual DOM in React?",
      options: [
        { id: 0, text: "A conceptual model for databases", isCorrect:  false },
        { id: 1, text: "A lightweight database", isCorrect: false },
        { id: 2, text: "An in-memory representation of the actual DOM", isCorrect:  true },
        { id: 3, text: "A physical backup of the DOM", isCorrect: true },
      ],
      ans:3,
    },
    {
      text: "What command is used to create a new React application using Create React App?",
      options: [
        { id: 0, text: "react new", isCorrect:  false },
        { id: 1, text: "create-react-app", isCorrect: true },
        { id: 2, text: "new-react-app", isCorrect:  false },
        { id: 3, text: "init-react-app", isCorrect: false },
      ],
      ans:2,
    },
    {
      text: "What is the purpose of React `Router` in a React application",
      options: [
        { id: 0, text: "To manage state globally", isCorrect:  false },
        { id: 1, text: "To handle asynchronous requests", isCorrect: false },
        { id: 2, text: "To implement client-side routing", isCorrect:  true },
        { id: 3, text: " To optimize rendering performance", isCorrect: false },
      ],
      ans:3,
    },

    {
      text: "What is the purpose of the `useEffect` hook in React?",
      options: [
        { id: 0, text: "To handle form submissions", isCorrect:  false },
        { id: 1, text: "To perform side effects in functional components", isCorrect: true },
        { id: 2, text: "To define custom event listeners", isCorrect:  false },
        { id: 3, text: "To create new instances of components", isCorrect: false },
      ],
      ans:2,
    },
    
    {
      text: "What does React use to increase performance by updating only the necessary parts of the DOM?",
      options: [
        { id: 0, text: "Real DOM", isCorrect:  false },
        { id: 1, text: "Document Fragment", isCorrect: false },
        { id: 2, text: "Shadow DOM", isCorrect:  false },
        { id: 3, text: "Virtual DOM", isCorrect: true },
      ],
      ans:4,
    },

    {
      text: "What is the purpose of the `setState` function in React?",
      options: [
        { id: 0, text: "To define the initial state of a component", isCorrect:  false },
        { id: 1, text: "To update the state of a component and trigger a re-render", isCorrect: true },
        { id: 2, text: "To retrieve the current state of a component", isCorrect:  false },
        { id: 3, text: "To create a new instance of a component", isCorrect: false },
      ],
      ans:2,
    },

    {
      text: "In React, what is the key benefit of using the React.Fragment instead of a regular <div> for wrapping multiple elements?",
      options: [
        { id: 0, text: "Improved performance", isCorrect:  false },
        { id: 1, text: "More semantic HTML", isCorrect: false },
        { id: 2, text: "Avoiding unnecessary DOM nodes", isCorrect:  true },
        { id: 3, text: "Enhanced accessibility", isCorrect: false },
      ],
      ans:3,
    },

    
  ];
  
  export default questions;