import { Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Kosmici from "./kosmici"
import EkranStartowy from "./ekranStartowy"
import Statek from "./Statek"

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EkranStartowy/>}/>
          <Route path="/gra" element={<Kosmici/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App