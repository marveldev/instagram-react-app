import { useState } from 'react'
import { CONSTANTS } from "../common/constants"
import CreatePostModal from './CreatePostModal'

const Gallery = () => {
  const [postModal, setPostModal] = useState({isOpen: false, photoUrl: null})

  const openPostModal = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPostModal({isOpen: true, photoUrl: photoReader.result})
    })
  }

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button type="button" className="current">POSTS</button>
        <button type="button">IGTV</button>
        <button type="button">SAVED</button>
        <button type="button">TAGGED</button>
      </div>
      <div>
        <div>
          <input type="file" id="addPhoto" onChange={() => openPostModal('#addPhoto')}/>
          <label htmlFor="addPhoto">
            <i className="add-photo fa fa-plus-square"></i>
          </label>
        </div>
        <div className="gallery-output">
          <div className="gallery-item">
            <div className="photo-container">
              <img src={CONSTANTS.PHOTOURL} alt="profile" />
            </div>
            {/* <div className="about-photo">
              <button className="edit-text button">EDIT</button>
              <button className="delete-photoBtn button">X</button>
              <div id="aboutPhoto">Hey</div>
            </div> */}
          </div>
          <div className="gallery-item">
            <div className="photo-container">
              <img src={CONSTANTS.PHOTOURL} alt="profile" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="photo-container">
              <img src={CONSTANTS.PHOTOURL} alt="profile" />
            </div>
          </div>
        </div>
      </div>
      {postModal.isOpen &&
        <CreatePostModal
          postModal={postModal}
          setPostModal={setPostModal}
        />
      }
    </div>
  )
}

export default Gallery
