import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../../common/constants'
import { ProfilePhotoModal } from '../../common/components'
import './bio.scss'

const Bio = () => {
  const history = useHistory()
  const [photoModalIsActive, setPhotoModalIsActive] = useState(false)
  const [photoUrl, setPhotoUrl] = useState()
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery.posts[0])
  if (!galleryState) return null
  const galleryCount = galleryState?.length

  const changeProfilePhoto = () => {
    if (bio?.profilePhotoUrl) {
      setPhotoModalIsActive(true)
    } else {
      document.querySelector('#profilePhotoPicker').click()
    }
  }

  const profilePhotoPicker = (event) => {
    const photoReader = new FileReader()
    if(event.target.files[0]) {
      photoReader.readAsDataURL(event.target.files[0])
      photoReader.addEventListener('load', () => {
        setPhotoUrl(photoReader.result)
        setPhotoModalIsActive(true)
      })
    }
  }

  return (
    <div className="bio">
      <input type="file" id="profilePhotoPicker" onChange={profilePhotoPicker} />
      <button onClick={changeProfilePhoto} className="profile-photo">
        <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
          title="Change Profile Photo" alt="profile"
        />
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
            <p className="bio-about">{bio?.aboutUser || 'Add about'}</p>
          </section>
        </div>
      </div>
      {photoModalIsActive &&
        <ProfilePhotoModal
          setPhotoModalIsActive={setPhotoModalIsActive}
          setPhotoUrl={setPhotoUrl}
          photoUrl={photoUrl}
        />
      }
    </div>
  )
}

export default Bio
