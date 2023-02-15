import React, { useState } from 'react';
import CustomButton from './CustomButton';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  function handleButtonClick(color) {
    setSelectedColor(color);
  }

  return (
    <div>
      <CustomButton color="red" onClick={handleButtonClick} />
      <CustomButton color="green" onClick={handleButtonClick} />
      <CustomButton color="blue" onClick={handleButtonClick} />
      {selectedColor && (
        <p>You clicked the {selectedColor} button!</p>
      )}
    </div>
  );
}

export default App;

