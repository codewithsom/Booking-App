import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Travelocity</span>
        <div className="navItems">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  )
}
