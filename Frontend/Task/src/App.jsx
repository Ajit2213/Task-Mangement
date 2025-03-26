import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nabar } from './Component/Nabar'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import { AddForm } from './Pages/AddForm'
import { View } from './Pages/View'

// import './App.css'

function App() {
  
  return(
    <div>
      <div>
    <BrowserRouter>
        <Nabar/>
        <Routes>
   <Route path='/' element={<View/>}/>
   <Route path='/added' element={<AddForm/>}/>
  
        </Routes>
    </BrowserRouter>

      </div>
  
    </div>
  )
}

export default App
