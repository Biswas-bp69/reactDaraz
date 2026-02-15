import logo from './assets/logo.png'
import './header.css'

function Header() {
  return <header className="container-fluid bg-success">

    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div className="searchArea">
            <input type="text" />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <nav>
            <ul >
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </nav>

        </div>
      </div>
    </div>









  </header>
}

export default Header;