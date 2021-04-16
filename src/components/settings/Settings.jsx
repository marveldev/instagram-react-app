import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CONSTANTS } from '../common/constants'
import ProfilePhotoModal from '../common/ProfilePhotoModal'
import { bioActions } from '../redux/slice'
import './settings.scss'

const Settings = () => {
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const { bio } = useSelector(state => state.bio)
  const [photoModalIsActive, setPhotoModalIsActive] = useState(false)
  const [buttonClass, setButtonClass] = useState('enable')

  const inputEventHandler = () => {
    setButtonClass('enable')
  }

  const displayToast = selector => {
    document.querySelector(selector).style.display = 'block'

    setTimeout(() => {
      document.querySelector(selector).style.display = 'none'
    }, 3000)
  }

  const updateBio = event => {
    event.preventDefault()
    if (buttonClass === 'enable') {
      const username = document.querySelector('.username').value
      if (username.trim().length >= 1) {
        const name = document.querySelector('.name').value
        const website = document.querySelector('.website').value
        const aboutUser = document.querySelector('.bio-box').value
        const email = document.querySelector('.email').value
        const phoneNumber = document.querySelector('.phone-number').value
        const gender = document.querySelector('.gender').value
        const nextState = ({
          ...bio, name, username, website, aboutUser, email, phoneNumber, gender
        })

        dispatch(bioActions.setBio(nextState))
        displayToast('.success')
        setButtonClass('disable')
      }
      else {
        displayToast('.error')
      }
    }
  }

  return (
    <div>
      <div className="settings">
        <div className="settings-nav">
          <button id="current">Edit Profile</button>
          <button>Change Password</button>
          <button>Apps and Websites</button>
          <button>Email and SMS</button>
          <button>Push Notification</button>
          <button>Manage Contacts</button>
          <button>Privacy and Security</button>
          <button>Login Activity</button>
          <button>Emails from Instagram</button>
          <button>Switch to Professional Account</button>
        </div>
        <div className="settings-pane">
          <div className="user-profile">
            <img onClick={() => setPhotoModalIsActive(true)}
              src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
              className="nav-photo" title="Change Profile Photo" alt="profile"
            />
            <div>
              <p>{bio?.username || 'Add profile'}</p>
              <button id="photoButton" onClick={() => setPhotoModalIsActive(true)}>
                Change Profile Photo
              </button>
            </div>
          </div>
          <form onSubmit={updateBio}>
            <label>
              Name
              <input type="text" className="name" onChange={inputEventHandler}
                placeholder="Name" defaultValue={bio?.name} required
              />
            </label>
            <label>
              Username
              <input type="text" className="username" onChange={inputEventHandler}
                placeholder="Username" defaultValue={bio?.username} required
              />
            </label>
            <label>
              Website
              <input type="text" className="website" onChange={inputEventHandler}
                defaultValue={bio?.website} placeholder="Website"
              />
            </label>
            <label>
              Bio
              <textarea className="bio-box" onChange={inputEventHandler}
                defaultValue={bio?.aboutUser} placeholder="Bio" required
              >
              </textarea>
            </label>
            <label>
              Email
              <input type="email" className="email" onChange={inputEventHandler}
                defaultValue={bio?.email} placeholder="Email"
              />
            </label>
            <label>
              Phone Number
              <input type="tel" className="phone-number" onChange={inputEventHandler}
                defaultValue={bio?.phoneNumber}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-45-678"
              />
            </label>
            <label>
              Gender
              <input type="text" className="gender" onChange={inputEventHandler}
                defaultValue={bio?.gender} placeholder="Gender"
              />
            </label>
            <div className="form-buttons">
              <button type="submit"
                className={`${buttonClass} submit-button`}
              >
                Submit
              </button>
              <button type="button" onClick={() => goBack()} className="back-button">
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
      {photoModalIsActive &&
        <ProfilePhotoModal
          setPhotoModalIsActive={setPhotoModalIsActive}
        />
      }
      <div className="error message">
        <p>Blank fields cannot be submitted</p>
      </div>
      <div className="success message">
        <p>Your Profile Was Successfully Updated</p>
      </div>
    </div>
  )
}

export default Settings
