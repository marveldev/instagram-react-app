import FocusTrap from 'focus-trap-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import database from '../../database'
import { galleryActions } from '../gallery/slice'

const PostOptionModal = ({ setPostDibsIsOpen, setSinglePostIsActive }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments, selectedPostIndex } = galleryState
  const dispatch = useDispatch()
  const history = useHistory()

  const selectedComments = comments.filter(
    comment => comment.postId === posts[selectedPostIndex].id
  )

  const clearPostComments = async () => {
    const selectedCommentsIds = selectedComments.map(comment => comment.id)
    const newCommentsData = comments.filter(
      comment => comment.postId !== posts[selectedPostIndex].id
    )

    dispatch(galleryActions.addMultipleComments(newCommentsData))
    for (let index = 0; index < selectedCommentsIds.length; index++) {
      const singleCommentId = selectedCommentsIds[index]
      await database.comments.delete(singleCommentId)
    }
  }

  const clearPostLikes = async () => {
    const selectedPost = posts[selectedPostIndex]
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
    clearPostComments()
    posts.length === 1 && history.push('/')
    setSinglePostIsActive &&  setSinglePostIsActive(false)
    await database.posts.delete(posts[selectedPostIndex].id)
  }

  return (
    <FocusTrap focusTrapOptions={{ initialFocus : '.fa', escapeDeactivates: false }}>
      <div onClick={() => setPostDibsIsOpen(false)} className="overlay">
        {deleteModalIsOpen && (
          <div onClick={() => setDeleteModalIsOpen(false)} className="overlay">
            <div className="delete-post-modal">
              <p>Are you sure you want to delete post? This cannot be undone.</p>
              <button onClick={deleteSinglePost}>Delete</button>
              <button className="close-modal-button">Cancel</button>
            </div>
          </div>
        )}
        {!deleteModalIsOpen && (
          <div className="post-option-modal">
            <button onClick={clearPostComments}>Clear Comments</button>
            <button onClick={clearPostLikes}>Clear Likes</button>
            <button onClick={(event) => {
              setDeleteModalIsOpen(true); event.stopPropagation()
            }}>
              Delete Post
            </button>
            <button className="close-modal-button">Cancel</button>
          </div>
        )}
      </div>
    </FocusTrap>
  )
}

export default PostOptionModal
