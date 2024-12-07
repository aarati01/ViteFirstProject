import "../components/Navbar.css"
const Navbar = () => {
    return (
      <div className="heading">
        <nav  className="container">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Services</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  