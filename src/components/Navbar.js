import React from 'react'

const Navbar = () => {
  return (
    <>
         <div className=''>
    <nav className="navbar navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand fs-3 text-white">Home</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-warning" type="submit">Search</button>
    </form>
  </div>
  </nav>
  </div>
    </>
  ) 
}

export default Navbar