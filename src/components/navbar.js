import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { NavLink } from 'react-router-dom';
import { routes } from '../App';
import resume from '../img/SamanthaEalyResume.pdf'
import './styles/navbar.scss'

function Navbar() {
  const [click, setClick] = useState(false);
  
  // Handles opening and closing of menu on phone layout
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  
  useEffect(() => {
    const tl = anime.timeline({easing: 'easeInOutSine', loop: false});

    // Animation for navbar then stagger nav links on enter
    tl.add({
      targets: '#navbar',
      translateY: [-75, 0],
      duration: 500,
      easing: 'linear'
    })
    
    if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 768) {
      tl.add({
        targets: '#navbar a',
        opacity: [0, 1],
        delay: anime.stagger(300)
      }, '-=300')
    }
    else {
      tl.add({
        targets: ['.menu-icon' ,'.navbar-logo'],
        opacity: [0, 1],
        delay: anime.stagger(300)
      }, '-=300')
    }
  }, [])

  return (
    <nav id="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <div className={click ? "menu-close" : "menu-burger"}></div>
        </div>
        <ul className={click ? 'menu active' : 'menu'}>
          {routes.slice(1).map(route => (
            <li key={route.path}>
              <NavLink
                key={route.path}
                to={route.path}
                className="nav-link"
                activeClassName="active"
                activeStyle={{color: '#787FF6'}}
                onClick={closeMenu}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <li><a href={resume} className="nav-link resume" download>Resume</a></li>
        </ul>
        <NavLink exact to="/" className="navbar-logo" onClick={closeMenu}>Sam Ealy</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;