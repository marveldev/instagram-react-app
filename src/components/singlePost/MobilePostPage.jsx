import { useSelector, useDispatch } from 'react-redux'
import { CONSTANTS } from '../../common/constants'

const MobilePostPage = ({ setCurrentPostPage, selectedPostIndex, setSelectedPostIndex }) => {
  const { bio } = useSelector(state => state.bio)
  const galleryState = useSelector(state => state.gallery)
  const { posts, comments } = galleryState

  return (
    <>
      <div>
        <div className="mobile-post-header">
          <button>back</button>
          <span>Posts</span>
        </div>
        <div  className="post-page-content">
          <div className="user-info">
            <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
              className="nav-photo" alt="profile"
            />
            <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
            <button>
              <i className="material-icons">&#xe5d3;</i>
            </button>
          </div>
          <div className="post-photo">
            <img src={{}} alt="gallery"/>
          </div>
          <div>
            <div className="single-post-options">
              <div>
                <button className="fa fa-heart-o"></button>
                <button className="fa fa-comment-o"></button>
                <button className="fa fa-share-square-o"></button>
              </div>
              <button className="material-icons">&#xe867;</button>
            </div>
            <span><strong>{posts[selectedPostIndex].likesCount || 0}</strong> Likes</span>
            <span><strong>{0}</strong> Comments</span>
            {/* {posts[selectedPostIndex].photoCaption && (
              <div className="caption-info">
                <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
                  className="nav-photo" alt="profile"
                />
                <div>
                  <span className="bio-name">{bio?.username || CONSTANTS.NAME}</span>
                  <span className="text">{posts[selectedPostIndex].photoCaption}</span>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>

  )
}

export default MobilePostPage
