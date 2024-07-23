import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.page"
import Nav from "./components/Nav.section"
import About from "./pages/About.page"


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Home />
        <About />
        {/* <Routes>  
          <Route path="/" element={<Home />} />
        </Routes>  */}
      </BrowserRouter>
    </>
  )
}

export default App
