import { Link } from 'react-router-dom'
import Logo from './../../assets/images/argentBankLogo.webp'
import'../Header/Header.css';




const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        <div className='not-connected'>
          <Link to='/login'>
            <i className='fa-solid fa-circle-user' />
            <p>Sign In</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
