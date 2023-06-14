import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import Home from "./page/Home";
import Customers from "./page/Customers";


const App = () => {
  return (
    <TemplateDefault>
      <Router>
      <Routes>
          <Route path="/customers" element={<Customers />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </TemplateDefault>
  )
}

export default App;
