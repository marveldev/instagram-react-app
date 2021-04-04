import { useHistory } from "react-router-dom"
import { CONSTANTS } from '../common/constants'

const Bio = ({ bio }) => {
  const history = useHistory()

  return (
    <div className="bio">
      <div>
        <div className="profile-photo">
          <img src={CONSTANTS.PHOTOURL} alt="profile" />
        </div>
      </div>
      <div className="bio-info">
        <div>
          <span className="bio-username">{bio?.username || CONSTANTS.NAME}</span>
          <button type="button" onClick={() => history.push("/settings")}>Edit Profile</button>
          <i className="fa fa-sun-o"></i>
        </div>
        <div>
          <span><strong>0</strong> posts</span>
          <span><strong>0</strong> followers</span>
          <span><strong>0</strong> following</span>
        </div>
        <span className="bio-name">{bio?.name}</span>
        <p>{bio?.aboutUser || 'Add about'}</p>
      </div>
    </div>
  )
}

export default Bio
