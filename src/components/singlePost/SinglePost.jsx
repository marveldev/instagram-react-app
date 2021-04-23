import { useSelector } from 'react-redux'
import FocusTrap from 'focus-trap-react'
import { CONSTANTS } from '../../common/constants'
import './singlePost.scss'

const SinglePost = ({ setIsSinglePostOpen, selectedPostIndex, setSelectedPostIndex }) => {
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery.posts[0])

  const displayNextGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === galleryState.length - 1) {
      setSelectedPostIndex(0)
    } else {
      setSelectedPostIndex(selectedPostIndex + 1)
    }
  }

  const displayPreviousGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === 0) {
      setSelectedPostIndex(galleryState.length - 1)
    } else {
      setSelectedPostIndex(selectedPostIndex - 1)
    }
  }

  return (
    <FocusTrap focusTrapOptions={{ initialFocus : '.fa', escapeDeactivates: false }}>
      <div>
        <div className="overlay" onClick={() => setIsSinglePostOpen(false)}>
          <button className="close-overlay-button">
            <i className="material-icons">&#xe5cd;</i>
          </button>
          <button onClick={displayPreviousGallery} className="previous-button">
            <i className="fa fa-angle-left"></i>
          </button>
          <button onClick={displayNextGallery} className="next-button">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
        <div className="single-post">
          <div className="post-photo">
            <img src={galleryState[selectedPostIndex].photoUrl} alt="gallery"/>
          </div>
          <div>
            <div className="user-info">
              <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
              <button><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <div className="about-caption">
              <div className="caption-info">
                <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                  className="nav-photo" alt="profile"
                />
                <div>
                  <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                  <span id="caption">{galleryState[selectedPostIndex].photoCaption}</span>
                </div>
              </div>
            </div>
            <div className="post-reaction-options">
              <div className="single-post-options">
                <div>
                  <button className="fa fa-heart-o"></button>
                  <button className="fa fa-comment-o"></button>
                  <button className="fa fa-share-square-o"></button>
                </div>
                <button className="material-icons">&#xe867;</button>
              </div>
              <div id="commentBox">
                <i className="fa fa-smile-o"></i>
                <textarea placeholder="Add a comment..."></textarea>
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}

export default SinglePost
