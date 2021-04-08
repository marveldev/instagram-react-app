import { useState } from 'react'
import { useSelector } from 'react-redux'
import CreatePostModal from './CreatePostModal'

const Gallery = () => {
  const galleryState = useSelector(state => state.gallery)
  const [postModal, setPostModal] = useState({isOpen: false, photoUrl: null})

  const openPostModal = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPostModal({isOpen: true, photoUrl: photoReader.result})
    })
  }

  const galleryItems = galleryState.gallery?.map(galleryItem => (
    <div key={galleryItem.id} className="gallery-item">
      <div className="photo-container">
        <img src={galleryItem.photoUrl} alt="profile" />
      </div>
          {/* <div className="about-photo">
              <button className="edit-text button">EDIT</button>
              <button className="delete-photoBtn button">X</button>
              <div id="aboutPhoto">Hey</div>
            </div> */}
    </div>
  ))

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
          {galleryItems.length >= 1 ? galleryItems :
            <h3 id="galleryMessage">No Gallery Yet, Click the plus button to add gallery.</h3>
          }
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
