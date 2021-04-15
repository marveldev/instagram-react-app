import { useState } from 'react'
import { useSelector } from 'react-redux'
import CreatePostModal from './CreatePostModal'
import SinglePost from '../singlePost/SinglePost'

const Gallery = () => {
  const galleryState = useSelector(state => state.gallery)
  const [postModal, setPostModal] = useState({isOpen: false, photoUrl: null})
  const [isSinglePostOpen, setIsSinglePostOpen] = useState(false)
  const [selectedPostIndex, setSelectedPostIndex] = useState()

  const openPostModal = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPostModal({isOpen: true, photoUrl: photoReader.result})
    })
  }

  const getIndex = galleryItem => {
    const index = galleryState.gallery.indexOf(galleryItem)
    setSelectedPostIndex(index)
    setIsSinglePostOpen(true)
  }

  const galleryItems = galleryState.gallery?.map(galleryItem => (
    <button key={galleryItem.id} onClick={() => getIndex(galleryItem)}>
      <div className="photo-container">
        <img src={galleryItem.photoUrl} alt="profile" />
      </div>
    </button>
  ))

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button type="button" className="current">
          <i className="material-icons">&#xe3ec;</i>
          <span>POSTS</span>
        </button>
        <button type="button">
          <i className="material-icons">&#xe639;</i>
          <span>IGTV</span>
        </button>
        <button type="button">
          <i className="material-icons">&#xe867;</i>
          <span>SAVED</span>
        </button>
        <button type="button">
          <i className="material-icons">&#xe853;</i>
          <span>TAGGED</span>
        </button>
      </div>
      <div>
        <div>
          <input type="file" id="addPhoto" onChange={() => openPostModal('#addPhoto')}/>
          <label htmlFor="addPhoto">
            <i className="add-photo fa fa-plus-square"></i>
          </label>
        </div>
        <div className="gallery-content">
          {galleryItems.length >= 1 ?
            <div className="gallery-output">
              {galleryItems}
            </div> :
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
      {isSinglePostOpen &&
        <SinglePost
          selectedPostIndex={selectedPostIndex}
          isSinglePostOpen={isSinglePostOpen}
          setIsSinglePostOpen={setIsSinglePostOpen}
        />
      }
    </div>
  )
}

export default Gallery
