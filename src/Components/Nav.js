import React from 'react'
import  {NavLink,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Marketplace from './Pages/Marketplace'
import Collecttoken from './Pages/Collecttoken'
import Introduction from './Pages/Introduction'
import Collections from './Pages/Collections'
import Landsale from './Pages/Landesale'
import './Style/navStyle.css'
function Nav() {
  return (
    <div class="container-fluid p-0">
    <header class="p-3 text-bg-dark ">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
     
       <img src='https://assets-global.website-files.com/60f93c8e038fc32afa829f7d/61b7d20c374fbaf642e81f79_playnft-logo.png' class='thumbnail' alt='logo' id='mainlogo'/>

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <NavLink to='/' class="nav-link px-2 text-white" className="listItem">Home</NavLink>
        <NavLink to='/Pages/Marketplace' class="nav-link px-2 text-white"className="listItem" activeClassName="active">Marketplace</NavLink>
        <NavLink to='/Pages/Collections' class="nav-link px-2 text-white"className="listItem" activeClassName="active">Collections</NavLink>
        <NavLink to='/Pages/Introduction' class="nav-link px-2 text-white"className="listItem" activeClassName="active">Introduction</NavLink>
        <NavLink to='/Pages/Collecttoken' class="nav-link px-2 text-white"className="listItem" activeClassName="active">Collect Token</NavLink>
        <NavLink to='/Pages/Landsale' class="nav-link px-2 text-white" className="listItem" activeClassName="active">Land Sale</NavLink>
      </ul>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
        </div> 
    </header>
    <Routes>
        <Route path='/' elememt={<Home/>} exact />
        <Route path='/Pages/Marketplace' elememt={<Marketplace/>} />
        <Route path='/Pages/Collections' elememt={<Collections/>} />
        <Route path='/Pages/Introduction' elememt={<Introduction/>} />
        <Route path='/Pages/Collecttoken' elememt={<Collecttoken/>} />
        <Route path='/Pages/Landsale' element={<Landsale/>} />
    </Routes>
  </div>
  )
}

export default Nav