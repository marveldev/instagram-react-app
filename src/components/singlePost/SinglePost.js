import { CONSTANTS } from '../common/constants'

const SinglePost = () => {
  return (
    <>
      <div className="overlay">
        <button className="remove button"><i className="material-icons">&#xe5cd;</i></button>
        <button className="previous button"><i className="fa fa-angle-left"></i></button>
        <button className="next button"><i className="fa fa-angle-right"></i></button>
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
          <div className="about-caption">
            <div className="caption-info">
              <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile"/>
              <div>
                <span className="bio-name">Jane Doe</span>
                <span id="caption">Hello World.</span>
              </div>
            </div>
          </div>
          <div className="post-reaction-options">
            <div>
              <span className="fa fa-heart-o"></span>
              <span className="fa fa-comment-o"></span>
              <span className="material-icons">&#xe80d;</span>
              <span className="material-icons">&#xe867;</span>
            </div>
            <div id="commentBox">
              <i className="fa fa-smile-o"></i>
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
