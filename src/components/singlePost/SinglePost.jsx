import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { galleryActions } from '../gallery/slice'
import { CONSTANTS } from '../../common/constants'
import { addCommentToPost, addPostLike } from './common'
import PostOptionModal from './PostOptionModal'
import './singlePost.scss'

const SinglePost = ({ setSinglePostIsActive }) => {
  const [postDibsIsOpen, setPostDibsIsOpen] = useState(false)
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments, selectedPostIndex } = galleryState
  const dispatch = useDispatch()

  const displayNextGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === posts.length - 1) {
      dispatch(galleryActions.setSelectedPostIndex(0))
    } else {
      dispatch(galleryActions.setSelectedPostIndex(selectedPostIndex + 1))
    }
  }

  const displayPreviousGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === 0) {
      dispatch(galleryActions.setSelectedPostIndex(posts.length - 1))
    } else {
      dispatch(galleryActions.setSelectedPostIndex(selectedPostIndex - 1))
    }
  }

  const handlePostCommentEvent = event => {
    const keyCode = event.which || event.keyCode
    if (keyCode === 13 && event.shiftKey) {
      addCommentToPost(posts, selectedPostIndex, dispatch)
    }
  }

  const selectedPostComments = comments.filter(
    comment => comment.postId === posts[selectedPostIndex].id
  )

  const commentSection = selectedPostComments.map(comment => (
    <div key={comment.id} className="caption-info">
      <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
        className="nav-photo" alt="profile"
      />
      <div>
        <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
        <span className="text">{comment.text}</span>
      </div>
    </div>
  ))

  return (
    <FocusTrap focusTrapOptions={{ initialFocus : '.fa', escapeDeactivates: false }}>
      <div>
        <div className="overlay" onClick={() => setSinglePostIsActive(false)}>
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
            <img src={posts[selectedPostIndex].photoUrl} alt="gallery"/>
          </div>
          <div className="post-details">
            <div className="user-info">
              <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
              <button onClick={() => setPostDibsIsOpen(true)}>
                <i className="material-icons">&#xe5d3;</i>
              </button>
            </div>
            <div className="post-activity">
              {posts[selectedPostIndex].photoCaption && (
                <div className="caption-info">
                  <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                    className="nav-photo" alt="profile"
                  />
                  <div>
                    <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                    <span className="text">{posts[selectedPostIndex].photoCaption}</span>
                  </div>
                </div>
              )}
              <section>
                {commentSection}
              </section>
            </div>
            <div className="post-reaction-options">
              <div className="single-post-options">
                <div>
                  <button onClick={() => addPostLike(posts, selectedPostIndex, dispatch)}
                    className="fa fa-heart-o"
                  >
                  </button>
                  <button className="fa fa-comment-o"></button>
                  <button className="fa fa-share-square-o"></button>
                </div>
                <button className="material-icons">&#xe867;</button>
              </div>
              <span><strong>{posts[selectedPostIndex].likesCount || 0}</strong> Likes</span>
              <span><strong>{commentSection.length || 0}</strong> Comments</span>
              <div className="comment-container">
                <i className="fa fa-smile-o"></i>
                <textarea onKeyUp={handlePostCommentEvent} className="comment-box"
                  placeholder="Add a comment..."
                >
                </textarea>
                <button onClick={() => addCommentToPost(posts, selectedPostIndex, dispatch)}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        {postDibsIsOpen && (
          <PostOptionModal
            setPostDibsIsOpen={setPostDibsIsOpen}
            setSinglePostIsActive={setSinglePostIsActive}
          />
        )}
      </div>
    </FocusTrap>
  )
}

export default SinglePost
