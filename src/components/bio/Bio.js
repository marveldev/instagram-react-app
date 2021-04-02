import { CONSTANTS } from '../common/constants'

const Bio = () => {
  return (
    <div className="bio">
      <div>
        <div className="profile-photo">
          <img src={CONSTANTS.PHOTOURL} alt="profile" />
        </div>
      </div>
      <div className="bio-info">
        <div>
          <span className="bio-name">Add Name</span>
          <button type="button">Edit Profile</button>
          <i className="fa fa-sun-o"></i>
        </div>
        <div>
          <span><strong>0</strong> posts</span>
          <span><strong>0</strong> followers</span>
          <span><strong>0</strong> following</span>
        </div>
        <p>Add about</p>
      </div>
    </div>
  )
}

export default Bio
