import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../common/constants'

const SinglePost = ({ setIsSinglePostOpen, selectedPostIndex }) => {
  const { bio } = useSelector(state => state.bio)
  const { gallery } = useSelector(state => state.gallery)
  const [index, setIndex] = useState(selectedPostIndex)

  const displayNextGallery = event => {
    event.stopPropagation()
    setIndex(index + 1)
    if (index === gallery.length - 1) {
      setIndex(0)
    }
  }

  const displayPreviousGallery = event => {
    event.stopPropagation()
    setIndex(index - 1)
    if (index === 0) {
      setIndex(gallery.length -1)
    }
  }

  return (
    <>
      <div className="overlay" onClick={() => setIsSinglePostOpen(false)}>
        <button className="remove button">
          <i className="material-icons">&#xe5cd;</i>
        </button>
        <button onClick={displayPreviousGallery} className="previous button">
          <i className="fa fa-angle-left"></i>
        </button>
        <button onClick={displayNextGallery} className="next button">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
      <div className="single-post">
        <div className="post-photo">
          <img src={gallery[index].photoUrl} alt="gallery"/>
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
                <span id="caption">{gallery[index].photoCaption}</span>
              </div>
            </div>
          </div>
          <div className="post-reaction-options">
            <div>
              <span className="fa fa-heart-o"></span>
              <span className="fa fa-comment-o"></span>
              <span className="material-icons">&#xe80d;</span>
              <span className="material-icons">&#xe867;</span>
            </div>
            <div id="commentBox">
              <i className="fa fa-smile-o"></i>
              <textarea placeholder="Add a comment..."></textarea>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
