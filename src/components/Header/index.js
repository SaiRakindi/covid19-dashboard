import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <header>
    <nav className="header-container">
      <div>
        <Link to="/">
          <h1 className="header-heading">
            COVID19
            <span className="india-text">INDIA</span>
          </h1>
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/">
          <button type="button" className="nav-menu-item">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button type="button" className="nav-menu-item">
            About
          </button>
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
