import './Header.css'
import '../Header/Header.css'
import { Link  } from "react-router-dom"
// import Group6 from '..//../assets/image/Group6.png'
import { useState } from 'react'

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false)
   
    return (
       <nav className='navbar'>
           <div className='tit'>   <p>THE PLANETS</p>  </div>
        <header className='header'>
             <div className='menu'
                onClick={() => {
                setMenuOpen(!menuOpen);
             }}
             >
                   <span></span>
                   <span></span>
                   <span></span>
                </div >                 

          <ul className={menuOpen ? "open" : ""}>
              {/* <li>
                        <Link to="/">Home</Link> 
                </li> */}
                
              <li> <div className='circle1'></div>
                  <Link   to="/mercury">MERCURY</ Link>
              </li>
              <li><div className='circle2'></div>
                  <Link to="/venus">VENESU</Link>
              </li>
              <li><div className='circle3'></div>
                 <Link to="/earth">EARTH</Link> 
              </li>
              <li><div className='circle4'></div>
                 <Link to="/mars">MARS</Link> 
              </li>
              <li><div className='circle5'></div>
                 <Link to="/jupiter">JUPITER</Link> 
              </li>
              <li><div className='circle6'></div>
                 <Link to="/saturn">SATURN</Link> 
              </li>
              <li><div className='circle7'></div>
                 <Link to="/uranus">URANUS</Link> 
              </li>
              <li><div className='circle8'></div>
                 <Link to="/neptune">NEPTUNE</Link> 
              </li>
          </ul>
            </header>
      </nav>
  )
}

export default Header