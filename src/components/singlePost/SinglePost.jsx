import { useSelector, useDispatch } from 'react-redux'
import FocusTrap from 'focus-trap-react'
import { galleryActions } from '../gallery/slice'
import { CONSTANTS } from '../../common/constants'
import database from '../../database'
import './singlePost.scss'

const SinglePost = ({ setIsSinglePostOpen, selectedPost, setSelectedPost }) => {
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments } = galleryState
  const dispatch = useDispatch()

  const displayNextGallery = event => {
    event.stopPropagation()
    if (selectedPost.index === posts.length - 1) {
      setSelectedPost(0)
    } else {
      setSelectedPost(selectedPost.index + 1)
    }
  }

  const displayPreviousGallery = event => {
    event.stopPropagation()
    if (selectedPost.index === 0) {
      setSelectedPost(posts.length - 1)
    } else {
      setSelectedPost(selectedPost.index - 1)
    }
  }

  const addCommentToPost = async () => {
    const commentValue = document.querySelector('.comment-box').value
    if (commentValue.trim().length >= 1) {
      const commentObject = {
        id: 'id' + Date.parse(new Date()),
        text: commentValue,
        postId: selectedPost.id
      }

      try {
        await database.comments.add(commentObject)
        dispatch(galleryActions.addComment(commentObject))
      } catch(error) {
        console.log(error)
      }
    }
  }

  const selectedPostComments = comments.filter(comment => comment.postId === selectedPost.id)

  const commentSection = selectedPostComments.map(comment => (
    <div key={comment.id} className="caption-info">
      <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
        className="nav-photo" alt="profile"
      />
      <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
      <span className="comment">{comment.text}</span>
    </div>
  ))

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
            <img src={posts[selectedPost.index].photoUrl} alt="gallery"/>
          </div>
          <div>
            <div className="user-info">
              <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
              <button><i className="material-icons">&#xe5d3;</i></button>
            </div>
            <div className="post-activity">
              {posts[selectedPost.index].photoCaption && (
                <div className="caption-info">
                  <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                    className="nav-photo" alt="profile"
                  />
                  <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                  <span>{posts[selectedPost.index].photoCaption}</span>
                </div>
              )}
              <section>
                {commentSection}
              </section>
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
              <div className="comment-container">
                <i className="fa fa-smile-o"></i>
                <textarea className="comment-box" placeholder="Add a comment..."></textarea>
                <button onClick={addCommentToPost}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}

export default SinglePost
