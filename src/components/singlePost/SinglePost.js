import { CONSTANTS } from '../common/constants'

const SinglePost = () => {
  return (
    <>
      <div className="overlay">
        <button>X</button>
        <button></button>
        <button></button>
      </div>
      <div className="single-post">
        <div className="post-photo">
          <img src={CONSTANTS.PHOTOURL} alt="gallery"/>
        </div>
        <div>
          <div className="user-info">
            <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile"/>
            <span className="bio-name">Jane Doe</span>
            <button><i className="material-icons">&#xe5d3;</i></button>
          </div>
          <div className="caption-info">
            <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile"/>
            <div>
              <span className="bio-name">Jane Doe</span>
              <span id="caption">Hello World.</span>
            </div>
          </div>
          <div className="post-reaction-options">
            <div>
              <span className="fa fa-heart"></span>
              <span className="fa fa-comment-o"></span>
              <span className="fa fa-send-o"></span>
              <span></span>
            </div>
            <div>
              <span className="fa fa-smile-o"></span>
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
