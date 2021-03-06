import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CONSTANTS } from '../../common/constants'

const DropDown = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="dropdown">
      <button onClick={() => setIsDropdownOpen(true)}>
        <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
          className="nav-photo" alt="profile"
        />
      </button>
      {isDropdownOpen && (
        <div>
          <div className="overlay"
            style={{backgroundColor: "rgba(0,0,0,0.0)"}}
            onClick={() => setIsDropdownOpen(false)}
          >
          </div>
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
        </div>
      )}
    </div>
  )
}

export default DropDown
