import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (<>
            <nav className="navbar sticky-top" aria-label="Eleventh navbar example">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">SHARETRADE<span>.COM</span></Link>
            </div>
        </nav>
      <div className="container-lg">
      <Outlet />
      </div>
      </>
  )
}

export default Header
