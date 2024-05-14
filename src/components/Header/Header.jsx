import { NavLink } from "react-router-dom"
import img from '../../assets/12782ac2b8ae20cf43f86afa1f4f6076.png'
import { useEffect, useState } from "react"


const Header = () => {
  const [scrolled, setScrolled] = useState(false);


  const HandleScrolled   =() => {
    const offsets = window.scrollY;
    if(offsets > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', HandleScrolled)
  }, []);

  return (
    <div>
      <nav className={`navbar sticky-top navbar-expand-lg nav-sec1 ${scrolled ? "sticky-nav1" : " "}`}>
  <div className="container">
    <NavLink>
     <img className="" src={img} alt="" width='30px'/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-lg-0 nav_ul">
        <li className="nav-item nav-li">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item nav-li">
          <NavLink className="nav-link" to='/About'>About</NavLink>
        </li> 
        <li className="nav-item nav-li"> 
          <NavLink className="nav-link" to='/Products'>Products</NavLink>
        </li>
        <li className="nav-item nav-li">
          <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
          width='26'
          height='26'
          alt=""
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModel"
          // onClick={() => setSearch(true)}
          className="img-small mx-3" />

          <NavLink to="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
              width="26"
              height="26"
              alt=""
              // data-bs-toggle="offcanvas"
              // data-bs-target="#offcanvasRight"
              // aria-controls="#offcanvasRight"
              // onClick={() => setShowCart(true)}
              className="img-small" /> 
          </NavLink>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Header
