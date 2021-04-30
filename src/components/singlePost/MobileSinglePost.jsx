import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'
import { addPostLike } from './common'
import './mobileSinglePost.scss'

const MobileSinglePost = ({ setPostCommentIsOpen }) => {
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments, selectedPostIndex } = galleryState

  useEffect(() => {
    const selectedPostId = posts[selectedPostIndex].id
    const selectedPost = document.querySelector(`#${selectedPostId}`)
    selectedPost.scrollIntoView()
  }, [])

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
                <button>
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
                    <button onClick={() => setPostCommentIsOpen(true)}
                      className="fa fa-comment-o"
                    >
                    </button>
                    <button className="fa fa-share-square-o"></button>
                  </div>
                  <button className="material-icons">&#xe867;</button>
                </div>
                <span><strong>{post.likesCount || 0}</strong> Likes</span>
                <span><strong>{0}</strong> Comments</span>
                {post.photoCaption && (
                  <div className="caption-info">
                    <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                    <span>{posts[selectedPostIndex].photoCaption}</span>
                  </div>
                )}
                <div>
                  <button>View all comments</button>
                  <div>Last two comments</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileSinglePost
