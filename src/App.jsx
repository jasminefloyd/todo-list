import { useState } from 'react'

// Import the components from a local file
import ListItems from './components/ListItems'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInput(event) {
    setInputValue(event.target.value); // Capture the value from the input field and update the state.
  }

  function handleClick() {
    setToDoArray((prevArray) => [...prevArray, inputValue]) // Create a new array by adding 'inputValue' to the existing 'toDoArray'.
    setInputValue(''); // Clear the input field after adding the item to the list.
  }

    
  
  return (
    <>
    <div className="container">
      <Header />
      <div>
        <div className="form">
          <input type="text" value={inputValue} onChange={handleInput} placeholder='Enter new Item' />
          <button onClick={handleClick}><span>Add Item</span></button>
        </div>
        <ListItems toDoArray={toDoArray} />
      </div>
    </div>
    <Footer />
  </>
        
    )
}








export default App