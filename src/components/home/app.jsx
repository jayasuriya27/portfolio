import React from 'react'
import{Routes,Route} from 'react-router-dom'
import About from '../growing plant/about'
import Project from '../growing plant/project'
import Home from '../growing plant/home'
import Contact from '../growing plant/contact'
import Skill from '../growing plant/skill'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>

  )
}

export default App