import { useState, useRef, useEffect  } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CONSTANTS } from '../common/constants'


const DropDown = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef('')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
  }, [ref])

  return (
    <div ref={ref} className="dropdown">
      <div>
        <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
          onClick={() => setIsOpen(!isOpen)}
          className="nav-photo" alt="profile"
        />
      </div>
      {isOpen && (
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
  )
}

export default DropDown
