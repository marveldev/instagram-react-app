import { useState } from 'react'
import { useSelector } from 'react-redux'
import CreatePostModal from './CreatePostModal'
import SinglePost from '../singlePost/SinglePost'
import MobilePostPage from '../singlePost/MobilePostPage'
import './gallery.scss'

const Gallery = () => {
  const [postModal, setPostModal] = useState({isOpen: false, photoUrl: null})
  const [selectedPostIndex, setSelectedPostIndex] = useState()
  const [currentPostPage, setCurrentPostPage] = useState('')
  const galleryState = useSelector(state => state.gallery.posts)

  const openPostModal = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPostModal({isOpen: true, photoUrl: photoReader.result})
    })
  }

  const handlePostClick = (index) => {
    setSelectedPostIndex(index)
    if (window.innerWidth <= 768) {
      setCurrentPostPage('mobile')
    } else {
      setCurrentPostPage('desktop')
    }
  }

  const galleryItems = galleryState?.map((galleryItem, index) => (
    <button key={galleryItem.id} onClick={() => handlePostClick(index)}>
      <div className="photo-container">
        <img src={galleryItem.photoUrl} alt="profile" />
      </div>
    </button>
  ))

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button type="button" className="active-nav">
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
        <div>
          {galleryItems?.length > 0 ?
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
      {currentPostPage === 'desktop' &&
        <SinglePost
          selectedPostIndex={selectedPostIndex}
          setSelectedPostIndex={setSelectedPostIndex}
          setCurrentPostPage={setCurrentPostPage}
        />
      }
      {currentPostPage === 'mobile' &&
        <MobilePostPage
          selectedPostIndex={selectedPostIndex}
          setSelectedPostIndex={setSelectedPostIndex}
          setCurrentPostPage={setCurrentPostPage}
        />
      }
    </div>
  )
}

export default Gallery
