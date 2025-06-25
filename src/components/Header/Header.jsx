import { Link } from 'react-router-dom'
import Logo from './../../assets/images/argentBankLogo.png'



const Header = () => {
  return (
    <header>
      <h1 className='sr-only'>Argent Bank</h1>
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
