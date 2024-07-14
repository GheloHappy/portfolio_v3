import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.page"
import Nav from "./components/Nav.section"


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
