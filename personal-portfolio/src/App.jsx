import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Skills from "./pages/Skills"
import ContactMe from "./pages/ContactMe"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Projects from "./pages/Projects"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contactMe" element={<ContactMe />}/>
          <Route path="/projects" element={<Projects />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
