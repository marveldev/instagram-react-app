import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../common/constants'

const TopNav = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

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
        <div className="dropdown">
          <div>
            <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
              onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
              className="nav-photo" alt="profile"
            />
          </div>
          {dropdownIsOpen && (
            <div className="dropdown-content">
              <button type="button" onClick={() => history.push("/")}>
                <i className="fa fa-user-circle"></i>
                Profile
              </button>
              <button type="button"><i className="material-icons">&#xe8e7;</i>Saved</button>
              <button type="button" onClick={() => history.push("/settings")}>
                <i className="fa fa-sun-o"></i>
                Settings
              </button>
              <button type="button"><i className="material-icons">&#xe86a;</i>
                Switch Accounts
              </button>
              <button type="button">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default TopNav
