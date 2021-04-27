import { useSelector, useDispatch } from 'react-redux'
import FocusTrap from 'focus-trap-react'
import { galleryActions } from '../gallery/slice'
import { CONSTANTS } from '../../common/constants'
import database from '../../database'
import './singlePost.scss'

const SinglePost = ({ setIsSinglePostOpen, selectedPostIndex, setSelectedPostIndex }) => {
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments } = galleryState
  const dispatch = useDispatch()

  const displayNextGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === posts.length - 1) {
      setSelectedPostIndex(0)
    } else {
      setSelectedPostIndex(selectedPostIndex + 1)
    }
  }

  const displayPreviousGallery = event => {
    event.stopPropagation()
    if (selectedPostIndex === 0) {
      setSelectedPostIndex(posts.length - 1)
    } else {
      setSelectedPostIndex(selectedPostIndex - 1)
    }
  }

  const addPostLike = async () => {
    const selectedPost = posts[selectedPostIndex]
    const likesCount = selectedPost.likesCount || 0
    const newData = {...selectedPost, likesCount: likesCount + 1}
    const mutablePostData = [...posts]
    mutablePostData.splice(selectedPostIndex, 1, newData)
    dispatch(galleryActions.addMultiplePosts(mutablePostData))

    await database.posts.update(
      posts[selectedPostIndex].id, newData
    )
  }

  const addCommentToPost = async () => {
    const commentValue = document.querySelector('.comment-box').value
    if (commentValue.trim().length >= 1) {
      const commentObject = {
        id: 'id' + Date.parse(new Date()),
        text: commentValue,
        postId: posts[selectedPostIndex].id
      }

      try {
        await database.comments.add(commentObject)
        dispatch(galleryActions.addComment(commentObject))
      } catch(error) {
        console.log(error)
      }
    }

    document.querySelector('.comment-box').value = ''
  }

  const addEventHandler = event => {
    const keyCode = event.which || event.keyCode
    if (keyCode === 13 && event.shiftKey) {
      addCommentToPost()
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

  console.log(commentSection.length);

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
            <img src={posts[selectedPostIndex].photoUrl} alt="gallery"/>
          </div>
          <div className="post-details">
            <div className="user-info">
              <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
              <button><i className="material-icons">&#xe5d3;</i></button>
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
                  <button onClick={addPostLike} className="fa fa-heart-o"></button>
                  <button className="fa fa-comment-o"></button>
                  <button className="fa fa-share-square-o"></button>
                </div>
                <button className="material-icons">&#xe867;</button>
              </div>
              <span><strong>{posts[selectedPostIndex].likesCount || 0}</strong> Likes</span>
              <span><strong>{commentSection.length || 0}</strong> Comments</span>
              <div className="comment-container">
                <i className="fa fa-smile-o"></i>
                <textarea onKeyUp={addEventHandler} className="comment-box"
                  placeholder="Add a comment..."
                >
                </textarea>
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
