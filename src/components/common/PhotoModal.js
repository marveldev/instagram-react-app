const PhotoModal = ({ setProfilePhotoModal, setBio, bio }) => {
  const updateProfilePhoto = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setBio({...bio, profilePhotoUrl: photoReader.result})
    })
  }

  return (
    <>
      <div onClick={() => setProfilePhotoModal(false)} className="overlay"></div>
      <div className="photo-modal">
        <p>Change Profile Photo</p>
        <input type="file" onChange={() => updateProfilePhoto('#profilePhotoPicker')}
          id="profilePhotoPicker"
        />
        <label htmlFor="profilePhotoPicker">
          <span>Upload Photo</span>
        </label>
        <button className="remove-photo-button">Remove Current Photo</button>
        <button className="cancel-button" onClick={() => setProfilePhotoModal(false)}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default PhotoModal
