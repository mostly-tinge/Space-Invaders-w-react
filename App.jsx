import EkranStartowy from "./EkranStartowy"
import Kosmici from "./Kosmici"
import EkranKoncowy from "./EkranKoncowy"

import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import WynikiGraczy from "./WynikiGraczy";

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<EkranStartowy/>}/>
            <Route path="gra" element={<Kosmici/>}/>
            <Route path="wyniki" element={<WynikiGraczy/>}/>
        </Route>
    )
  )

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App