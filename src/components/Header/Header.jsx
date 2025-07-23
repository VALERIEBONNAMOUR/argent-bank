import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from './../../assets/images/argentBankLogo.webp'
import '../Header/Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        <div className="not-connected">
          <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            <p>Sign In</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
