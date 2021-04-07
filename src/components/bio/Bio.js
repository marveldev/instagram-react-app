import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../common/constants'
import PhotoModal from '../common/PhotoModal'

const Bio = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const [profilePhotoModal, setProfilePhotoModal] = useState(false)

  return (
    <div className="bio">
      <div>
        <div className="profile-photo">
          <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
            onClick={() => setProfilePhotoModal(true)} alt="profile"
          />
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
      {profilePhotoModal &&
        <PhotoModal
          setProfilePhotoModal={setProfilePhotoModal}
        />
      }
    </div>
  )
}

export default Bio
