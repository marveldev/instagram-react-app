import { useDispatch, useSelector } from 'react-redux'
import database from '../../database'
import { bioActions } from '../../components/bio/slice'

const ProfilePhotoModal = ({ setPhotoModalIsActive, setPhotoUrl, photoUrl }) => {
  const dispatch = useDispatch()
  const { bio } = useSelector(state => state.bio)

  const addProfilePhoto = async () => {
    const bioData = ({...bio, profilePhotoUrl: photoUrl})
    await database.bio.clear()
    await database.bio.add(bioData)
    const newBioData = await database.bio.toArray()
    dispatch(bioActions.setBio(newBioData[0]))
    setPhotoModalIsActive(false)
    setPhotoUrl()
  }

  const removeProfilePhoto = async () => {
    const bioData = ({...bio, profilePhotoUrl: ''})
    await database.bio.clear()
    await database.bio.add(bioData)
    const newBioData = await database.bio.toArray()
    dispatch(bioActions.setBio(newBioData[0]))
    setPhotoModalIsActive(false)
  }

  return (
    <>
      <div onClick={() => setPhotoModalIsActive(false)} className="overlay"></div>
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
      {!photoUrl && (
        <div className="photo-modal">
          <p>Change Profile Photo</p>
          {/* <input type="file" onChange={() => changePhotoUrl('#profilePhotoPicker')}
            id="profilePhotoPicker"
          /> */}
          <label htmlFor="profilePhotoPicker">
            <span>Upload Photo</span>
          </label>
          <button onClick={removeProfilePhoto} className="remove-photo-button">
            Remove Current Photo
          </button>
          <button onClick={() => setPhotoModalIsActive(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}
    </>
  )
}

export default ProfilePhotoModal
