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
        <div className="user-profile">
          <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile" />
          <div>
            <p>Add Name</p>
            <button id="photoButton">Change Profile Photo</button>
          </div>
        </div>
        <form>
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Username
            <input type="text" placeholder="Username" />
          </label>
          <label>
            Website
            <input type="text" placeholder="Website" />
          </label>
          <label>
            Bio
            <textarea className="bio-box" placeholder="Bio"></textarea>
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Phone Number
            <input type="text" placeholder="Phone Number" />
          </label>
          <label>
            Gender
            <input type="text" placeholder="Gender" />
          </label>
          <button id="submitButton">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Settings
