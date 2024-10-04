import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.jsx'
import Order from './components/pages/Order.jsx'
import Food from './components/pages/Food.jsx'
import Home from './components/pages/Home.jsx'
import Details from './components/pages/Details.jsx'

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/order'  element={<Order/>}/>
    <Route path='/foods' element={<Food/>}/>
    <Route path='/foods/:id' element={<Details/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
