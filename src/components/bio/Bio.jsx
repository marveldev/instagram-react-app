import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../common/constants'
import ProfilePhotoModal from '../common/ProfilePhotoModal'
import './bio.scss'

const Bio = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)
  const galleryCount = useSelector(state => state.galleryCount.value)
  const [photoModalIsActive, setPhotoModalIsActive] = useState(false)

  return (
    <div className="bio">
      <button onClick={() => setPhotoModalIsActive(true)} className="profile-photo">
        <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL} alt="profile"/>
      </button>
      <div className="bio-info">
        <div>
          <span className="bio-username">{bio?.username || CONSTANTS.NAME}</span>
          <button type="button" onClick={() => history.push("/settings")}>
            Edit Profile
          </button>
          <i className="fa fa-sun-o"></i>
        </div>
        <div id="userAccountInfo">
          <div>
            <span><strong>{galleryCount}</strong> posts</span>
            <span><strong>0</strong> followers</span>
            <span><strong>0</strong> following</span>
          </div>
          <section>
            <span className="bio-name">{bio?.name}</span>
            <p>{bio?.aboutUser || 'Add about'}</p>
          </section>
        </div>
      </div>
      {photoModalIsActive &&
        <ProfilePhotoModal
          setPhotoModalIsActive={setPhotoModalIsActive}
        />
      }
    </div>
  )
}

export default Bio
