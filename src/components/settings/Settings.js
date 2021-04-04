import { CONSTANTS } from '../common/constants'

const Settings = ({ setBio, bio }) => {
  const updateBio = (event) => {
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
    } else {
      alert('Blank fields cannot be submitted')
    }
  }

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
            <p>Add profile</p>
            <button id="photoButton">Change Profile Photo</button>
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
  )
}

export default Settings
