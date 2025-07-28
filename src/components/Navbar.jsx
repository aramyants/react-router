import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'blue' : 'black',
    }
  }

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyle} to="/">Home</NavLink>
      <NavLink style={navLinkStyle} to="/about">About</NavLink>
      <NavLink style={navLinkStyle} to="/products">Products</NavLink>
      <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
    {
      auth.user ? (
        <span>
          Welcome, {auth.user}! <button onClick={auth.logout}>Logout</button>
        </span>
      ) : (
        <NavLink style={navLinkStyle} to="/login">Login</NavLink>
      )
    }
    </nav>
  )
}
