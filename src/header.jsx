import logo from './assets/logo.png'
import './header.css'

function Header() {
  return <header className="container-fluid bg-success">

    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div className="searchArea">
            <input type="text" />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <nav className='d-none d-lg-block'>
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







    <details class="roleMenu d-block d-lg-none">
      <summary class="dotBtn"><i class="fa-solid fa-bars text-white"></i>menu</summary>
      <div class="dropdown">
        <a href="#flashSale">Flash Sale</a>
        <a href="#Categories"> Categories</a>
        <a href="#forYou"> For You</a>
        <a class="btn text-dark text-lg-light " data-bs-toggle="modal" data-bs-target="#contactModal"> Contact Us</a>
        <a class="btn btn-primary text-light" data-bs-toggle="modal" data-bs-target="#registerModal"> Register </a>
      </div>
    </details>

  </header>
}

export default Header;