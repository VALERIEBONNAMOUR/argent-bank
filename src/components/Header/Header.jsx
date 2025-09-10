import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/userSlice.jsx';
import Logo from './../../assets/images/argentBankLogo.webp';
import '../Header/Header.css';

const Header = () => {
  const token = localStorage.getItem('token');
  const profile = useSelector((state) => state.user.userInfo);
  console.log(profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>

        {!token ? (
          <div className="not-connected">
            <Link to="/login">
              <i className="fas fa-user-circle sign-in-icon"></i>
              <p>Sign In</p>
            </Link>
          </div>
        ) : (
          
          <div className="connected">
            <Link to="/profile">
              <i className="fas fa-user-circle"></i>
              <p>{profile?.firstName}</p>
            </Link>

            <button onClick={handleLogout} className="signout-btn">
              <i className="fa-solid fa-right-from-bracket"></i>
              <p>Sign Out</p>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
