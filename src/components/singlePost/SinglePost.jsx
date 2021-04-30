import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { galleryActions } from '../gallery/slice'
import { CONSTANTS } from '../../common/constants'
import database from '../../database'
import './singlePost.scss'

const SinglePost = ({ setSinglePostIsActive }) => {
  const [postOptionsModalIsOpen, setPostOptionsModalIsOpen] = useState(false)
  const [deletePostModalIsOpen, setDeletePostModalIsOpen] = useState(false)
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

  const clearPostComments = async () => {
    const commentIds = selectedPostComments.map(comment => comment.id)
    const newCommentsData = comments.filter(
      comment => comment.postId !== posts[selectedPostIndex].id
    )

    dispatch(galleryActions.addMultipleComments(newCommentsData))
    for (let index = 0; index < commentIds.length; index++) {
      const id = commentIds[index]
      await database.comments.delete(id)
    }
  }

  const clearPostLikes = async () => {
    const selectedPost =  posts[selectedPostIndex]
    const newData = {...selectedPost, likesCount: 0}
    const mutablePostData = [...posts]
    mutablePostData.splice(selectedPostIndex, 1, newData)
    dispatch(galleryActions.addMultiplePosts(mutablePostData))

    await database.posts.update(
      posts[selectedPostIndex].id, {likesCount: 0}
    )
  }

  const deleteSinglePost = async () => {
    const mutablePostData = [...posts]
    mutablePostData.splice(selectedPostIndex, 1)
    dispatch(galleryActions.addMultiplePosts(mutablePostData))
    setSinglePostIsActive(false)
    clearPostComments()
    await database.posts.delete(posts[selectedPostIndex].id)
  }

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
              <button onClick={() => setPostOptionsModalIsOpen(true)}>
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
        {postOptionsModalIsOpen && (
          <FocusTrap focusTrapOptions={{ initialFocus : '.fa', escapeDeactivates: false }}>
            <div onClick={() => setPostOptionsModalIsOpen(false)} className="overlay">
              <div className="post-options-modal">
                <button onClick={clearPostComments}>Clear Comments</button>
                <button onClick={clearPostLikes}>Clear Likes</button>
                <button onClick={() => setDeletePostModalIsOpen(true)}>
                  Delete Post
                </button>
                <button className="close-modal-button">Cancel</button>
              </div>
            </div>
          </FocusTrap>
        )}
        {deletePostModalIsOpen && (
          <FocusTrap focusTrapOptions={{ initialFocus : '.fa', escapeDeactivates: false }}>
            <div onClick={() => setDeletePostModalIsOpen(false)} className="overlay">
              <div className="delete-post-modal">
                <p>Are you sure you want to delete post? This cannot be undone.</p>
                <button onClick={deleteSinglePost}>Delete</button>
                <button className="close-modal-button">Cancel</button>
              </div>
            </div>
          </FocusTrap>
        )}
      </div>
    </FocusTrap>
  )
}

export default SinglePost
