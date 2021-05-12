import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CreatePostModal from './CreatePostModal'
import SinglePost from '../singlePost/SinglePost'
import { galleryActions } from './slice'
import './gallery.scss'

const Gallery = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [postModal, setPostModal] = useState({isOpen: false, photoUrl: null})
  const [singlePostIsActive, setSinglePostIsActive] = useState(false)
  const galleryState = useSelector(state => state.gallery)
  const { posts } = galleryState

  const openPostModal = id => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      setPostModal({isOpen: true, photoUrl: photoReader.result})
    })
  }

  const handlePostClick = (index, postId) => {
    dispatch(galleryActions.setSelectedPostIndex(index))
    if (window.innerWidth <= 768) {
      history.push(`/mobilePostPage/${postId}`)
    } else {
      setSinglePostIsActive(true)
    }
  }

  const galleryItems = posts?.map(({ id, photoUrl}, index) => (
    <button key={id} onClick={() => handlePostClick(index, id)}>
      <div className="photo-container">
        <img src={photoUrl} alt="profile" />
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
      {singlePostIsActive &&
        <SinglePost
          setSinglePostIsActive={setSinglePostIsActive}
        />
      }
    </div>
  )
}

export default Gallery
