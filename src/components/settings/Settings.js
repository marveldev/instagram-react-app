import { CONSTANTS } from '../common/constants'

const Settings = () => {
  return (
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
        <span className="user-info">
          <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile" />
          <div>
            <p>Add Name</p>
            <button>Change Profile Photo</button>
          </div>
        </span>
        <label>
          Name
          <input type="text"/>
        </label>
        <label>
          Username
          <input type="text"/>
        </label>
        <label>
          Website
          <input type="text"/>
        </label>
        <label>
          Bio
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </label>
        <label>
          Email
          <input type="email"/>
        </label>
        <label>
          Phone Number
          <input type="text"/>
        </label>
        <label>
          Gender
          <input type="text"/>
        </label>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Settings
