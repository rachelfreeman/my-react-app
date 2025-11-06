import './App.css';
import TextInput from './Components/TextInput';
import { useState } from 'react';

function App() {
  const [fontSize, setFontSize] = useState(40);

  const increaseFontSize = () => {
    setFontSize(fontSize + 10);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 10);
  }

  const buttonStyle = {
    padding: 30,
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
    </div>
  );
}

export default App;
