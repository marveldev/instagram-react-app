import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bioActions } from '../redux/slice'

const ProfilePhotoModal = ({ setPhotoModalIsActive }) => {
  const dispatch = useDispatch()
  const { bio } = useSelector(state => state.bio)
  const [photoUrl, setPhotoUrl] = useState()

  const changePhotoUrl = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPhotoUrl(photoReader.result)
    })
  }

  const addProfilePhoto = () => {
    const nextState = ({...bio, profilePhotoUrl: photoUrl})
    dispatch(bioActions.setBio(nextState))
    setPhotoModalIsActive(false)
  }

  return (
    <>
      <div onClick={() => setPhotoModalIsActive(false)} className="overlay"></div>
      {!photoUrl && (
        <div className="photo-modal">
          <p>Change Profile Photo</p>
          <input type="file" onChange={() => changePhotoUrl('#profilePhotoPicker')}
            id="profilePhotoPicker"
          />
          <label htmlFor="profilePhotoPicker">
            <span>Upload Photo</span>
          </label>
          <button className="remove-photo-button">Remove Current Photo</button>
          <button className="cancel-button" onClick={() => setPhotoModalIsActive(false)}>
            Cancel
          </button>
        </div>
      )}
      {photoUrl && (
        <div className="confirm-profile-photo">
          <h3>Confirm Profile Photo</h3>
          <img src={photoUrl} alt="profile"/>
          <div>
            <button onClick={addProfilePhoto}>Confirm</button>
            <button onClick={() => setPhotoModalIsActive(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfilePhotoModal
