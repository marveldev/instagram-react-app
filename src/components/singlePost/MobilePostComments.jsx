import { useDispatch, useSelector } from 'react-redux'
import { addCommentToPost } from './common'
import { CONSTANTS } from '../../common/constants'

const MobilePostComments = ({ setPostCommentIsOpen }) => {
  const dispatch = useDispatch()
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments, selectedPostIndex } = galleryState

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
    <>
      <div className="mobile-post-comments">
        <div className="header">
          <button onClick={() => setPostCommentIsOpen(false)} className="material-icons">
            &#xe5c4;
          </button>
          <span>Comments</span>
        </div>
        <div className="content">
          <div className="post-activity">
            <div className="caption-info">
              <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <div>
                <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                <span className="text">{'hey'}</span>
              </div>
            </div>
            <section>
              {commentSection}
            </section>
          </div>
          <div className="comment-container">
            <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
              className="nav-photo" alt="profile"
            />
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
    </>
  )
}

export default MobilePostComments
