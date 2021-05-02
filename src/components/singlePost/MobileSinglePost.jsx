import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'
import { galleryActions } from '../gallery/slice'
import { addPostLike } from './common'
import PostOptionModal from './PostOptionModal'
import './mobileSinglePost.scss'

const MobileSinglePost = ({ setPostCommentIsOpen }) => {
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments, selectedPostIndex } = galleryState
  const [postDibsIsOpen, setPostDibsIsOpen] = useState(false)
  const selectedPostId = posts[selectedPostIndex].id
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const selectedPost = document.querySelector(`#${selectedPostId}`)
    selectedPost.scrollIntoView()
  }, [selectedPostId])

  const handlePostButtonEvent = (index, button) => {
    button === 'commentButton' ? setPostCommentIsOpen(true) : setPostDibsIsOpen(true)
    dispatch(galleryActions.setSelectedPostIndex(index))
  }

  const getPostComments = (id) => {
    const selectedComments = comments.filter(
      comment => comment.postId === id
    )

    return selectedComments
  }

  return (
    <>
      <div className="mobile-single-post">
        <div className="header">
          <button onClick={goBack} className="material-icons">&#xe5c4;</button>
          <span>Posts</span>
        </div>
        <div className="content">
          {posts?.map((post, index) => (
            <div key={post.id} id={post.id}>
              <div className="user-info">
                <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                  className="nav-photo" alt="profile"
                />
                <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                <button onClick={() => handlePostButtonEvent(index, 'moreButton')}>
                  <i className="material-icons">&#xe5d4;</i>
                </button>
              </div>
              <div className="post-photo">
                <img src={post.photoUrl} alt="gallery"/>
              </div>
              <div className="post-details">
                <div className="single-post-options">
                  <div>
                    <button onClick={() => addPostLike(posts, index, dispatch)}
                      className="fa fa-heart-o"
                    >
                    </button>
                    <button onClick={() => handlePostButtonEvent(index, 'commentButton')}
                      className="fa fa-comment-o"
                    >
                    </button>
                    <button className="fa fa-share-square-o"></button>
                  </div>
                  <button className="material-icons">&#xe867;</button>
                </div>
                <span><strong>{post.likesCount || 0}</strong> Likes</span>
                <span>
                  <strong>{getPostComments(post.id).length || 0} </strong>
                  Comments
                </span>
                {post.photoCaption && (
                  <div className="caption-info">
                    <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                    <span>{post.photoCaption}</span>
                  </div>
                )}
                <div className="post-info">
                  <button onClick={() => handlePostButtonEvent(index, 'commentButton')}>
                    View all comments
                  </button>
                  <div>
                    {getPostComments(post.id).slice(0, 2).map(comment => (
                      <div key={comment.id} className="caption-info">
                        <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                        <span className="text">{comment.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {postDibsIsOpen &&
          <PostOptionModal
            setPostDibsIsOpen={setPostDibsIsOpen}
          />
        }
      </div>
    </>
  )
}

export default MobileSinglePost
