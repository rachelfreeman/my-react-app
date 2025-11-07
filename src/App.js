import './App.css';
import TextInput from './Components/TextInput';
import { useEffect, useState } from 'react';

function App() {
  const [fontSize, setFontSize] = useState(40);
  const [apiResponse, setApiResponse] = useState(null);

  const increaseFontSize = () => {
    setFontSize(fontSize + 10);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 10);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setApiResponse(data));
  }, []);

  return (
    <div className="App">
      <div><TextInput style={{ fontSize: `${fontSize}px` }} /></div>
      <div>
        <input type="button" className="Button-style" onClick={increaseFontSize} value="+" />
        <input type="button" className="Button-style" onClick={decreaseFontSize} value="-" />
      </div>
      {apiResponse && (
        <div>
          <p>{apiResponse.userId}</p>
          <p>{apiResponse.id}</p>
          <p>{apiResponse.title}</p>
          <p>{apiResponse.completed ? `true` : `false`}</p>
        </div>
        )
      }
    </div>
  );
}

export default App;
