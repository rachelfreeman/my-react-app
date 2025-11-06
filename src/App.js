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
    padding: 40,
    border: '1px solid black',
    margin: 10
  }

  return (
    <div className="App">
      <TextInput style={{ fontSize: `${fontSize}px` }} /><br />
      <text type="button" style={buttonStyle} onclick={increaseFontSize}>+</text>
      <text type="button" style={buttonStyle} onclick={decreaseFontSize}>-</text>
    </div>
  );
}

export default App;
