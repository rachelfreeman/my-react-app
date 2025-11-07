import './App.css';
import TextInput from './Components/TextInput';
import { useState } from 'react';

function App() {
  const [fontSize, setFontSize] = useState(40);
  const [apiResponse, setApiResponse] = useState(null);

  const increaseFontSize = () => {
    setFontSize(fontSize + 10);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 10);
  }

  const callAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setApiResponse(data));
  }

  const buttonStyle = {
    padding: 20,
    marginTop: 20,
    border: '1px solid black'
  }

  return (
    <div className="App">
      <div><TextInput style={{ fontSize: `${fontSize}px` }} /></div>
      <div>
        <input type="button" style={buttonStyle} onClick={increaseFontSize} value="+" />
        <input type="button" style={buttonStyle} onClick={decreaseFontSize} value="-" />
      </div>
      <div>
        <input type="button" style={buttonStyle} onClick={callAPI} value="Call API" />
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
