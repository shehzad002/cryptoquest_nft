import logo from './../../assets/logo.png';
function Navbar() {
    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={logo} alt="logo" width="130" />
            </li>
           
          </ul>
        </div>
      </nav>
         
    );

}

export default Navbar;