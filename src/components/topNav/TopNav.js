import { useHistory } from 'react-router-dom'
import DropDown from './DropDown'

const TopNav = () => {
  const history = useHistory()

  return (
    <nav className="top-nav">
      <div>
        <img id="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo" />
      </div>
      <div>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="top-nav-buttons">
        <button type="button" aria-label="home" onClick={() => history.push("/")}>
          <i className="glyphicon glyphicon-home"></i>
        </button>
        <button type="button" aria-label="inbox"><i className="fa fa-send"></i></button>
        <button type="button" aria-label="explore"><i className="fa fa-compass"></i></button>
        <button type="button" aria-label="liked"><i className="fa fa-heart-o"></i></button>
        <DropDown />
      </div>
    </nav>
  )
}

export default TopNav
