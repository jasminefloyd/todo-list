import { createRoot } from 'react-dom/client'
import App from './App'


const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)

//open terminal in newly copied folder 
//run `npm install`
//run `npm install prop-types`
//run `npm run dev`
//delete these comments 


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s