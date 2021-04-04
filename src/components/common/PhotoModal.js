const PhotoModal = ({ setProfilePhotoModal }) => {
  return (
    <>
      <div onClick={() => setProfilePhotoModal(false)} className="overlay"></div>
      <div class="photo-modal">
        <p>Change Profile Photo</p>
        <input type="file" id="addProfilePhoto"/>
        <label htmlFor="addProfilePhoto">
          <span>Upload Photo</span>
        </label>
        <button>Remove Current Photo</button>
        <button onClick={() => setProfilePhotoModal(false)}>Cancel</button>
      </div>
    </>
  )
}

export default PhotoModal
