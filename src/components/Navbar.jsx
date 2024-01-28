import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='containerNavbar'>
        <span>🌍</span>
        <section className='routesNavbar'>
            <Link to="/"><article>Home</article></Link> 
            <Link to="/create-country"><article>Create country</article></Link>
            <Link to="/manage-country"><article>Manage country</article></Link>
        </section>
    </nav>
  )
}

export default Navbar