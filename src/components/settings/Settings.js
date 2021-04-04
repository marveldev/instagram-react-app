import { useState } from 'react'
import { CONSTANTS } from '../common/constants'

const Settings = ({ setBio, bio }) => {
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateBio = event => {
    event.preventDefault()
    const username = document.querySelector('.username').value
    if (username.trim().length >= 1) {
      const name = document.querySelector('.name').value
      const website = document.querySelector('.website').value
      const aboutUser = document.querySelector('.bio-box').value
      const email = document.querySelector('.email').value
      const phoneNumber = document.querySelector('.phone-number').value
      const gender = document.querySelector('.gender').value
      const nextState = {
        name, username, website, aboutUser, email, phoneNumber, gender
      }

      setBio(nextState)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000);
    } else {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 3000)
    }
  }

  return (
    <>
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
            <input type="file" id="addProfilePhoto"/>
            <label htmlFor="addProfilePhoto">
              <img src={CONSTANTS.PHOTOURL} className="nav-photo"
                title="Change Profile Photo" alt="profile"
              />
            </label>
            <div>
              <p>{bio?.username || 'Add profile'}</p>
              <label htmlFor="addProfilePhoto">
                <span id="photoButton">Change Profile Photo</span>
              </label>
            </div>
          </div>
          <form onSubmit={updateBio}>
            <label>
              Name
              <input type="text" className="name"
                placeholder="Name" defaultValue={bio?.name} required
              />
            </label>
            <label>
              Username
              <input type="text" className="username"
                placeholder="Username" defaultValue={bio?.username} required
              />
            </label>
            <label>
              Website
              <input type="text" className="website"
                defaultValue={bio?.website} placeholder="Website"
              />
            </label>
            <label>
              Bio
              <textarea className="bio-box" defaultValue={bio?.aboutUser} placeholder="Bio" required>
              </textarea>
            </label>
            <label>
              Email
              <input type="email" className="email"
                defaultValue={bio?.email} placeholder="Email"
              />
            </label>
            <label>
              Phone Number
              <input type="tel" className="phone-number" defaultValue={bio?.phoneNumber}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-45-678"
              />
            </label>
            <label>
              Gender
              <input type="text" className="gender"
                defaultValue={bio?.gender} placeholder="Gender"
              />
            </label>
            <button onSubmit={updateBio} id="submitButton">Submit</button>
          </form>
        </div>
      </div>
      {isError && (
        <div className="error message">
          <p>Blank fields cannot be submitted</p>
        </div>
      )}
      {isSuccess && (
        <div className="success message">
          <p>Your Profile Was Successfully Updated</p>
        </div>
      )}
    </>
  )
}

export default Settings
