import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../common/constants'
import ProfilePhotoModal from '../common/ProfilePhotoModal'

const Bio = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bio">
      <div className="profile-photo">
        <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
          onClick={() => setIsOpen(true)} alt="profile"
        />
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
      {isOpen &&
        <ProfilePhotoModal
          setIsOpen={setIsOpen}
        />
      }
    </div>
  )
}

export default Bio
