import { createRoot } from "react-dom/client"
import { App } from './App'
import './index.css'
// In the document, find the element with an id of "root", and place the <h1>My App</h1> inside of it, using the render method
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
