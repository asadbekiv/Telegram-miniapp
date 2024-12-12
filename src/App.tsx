// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import WebApp from '@twa-dev/sdk'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
// 		{/* Here we add our button with alert callback */}
//       <div className="card">
//         <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
//             Show Alert
//         </button>
//       </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import WebApp from '@twa-dev/sdk';

// Calculator Component
function Calculator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string | null>(null);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = eval(input); // Avoid eval in production for security reasons
      setResult(evaluatedResult);
    } catch (error) {
      setResult(`${error}`);
    }
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly placeholder="Enter expression" />
        <div className="result">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === '=' ? calculateResult() : handleButtonClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>
          C
        </button>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app">
      <h1>Cool React App</h1>
      <div className="counter">
        <h2>Counter</h2>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>Count is: {count}</p>
        <button onClick={() => WebApp.showAlert(`Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
      <Calculator />
    </div>
  );
}

export default App;

