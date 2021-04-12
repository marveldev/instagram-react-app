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
          <div>
            <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile"/>
            <span>Jane Doe</span>
            <button></button>
          </div>
          <div>
            <img src={CONSTANTS.PHOTOURL} className="nav-photo" alt="profile"/>
            <span>Jane Doe</span>
            <span>Hello World.</span>
          </div>
          <div>
            <div>
              <span className="fa fa-heart"></span>
              <span className="fa fa-comment-o"></span>
              <span className="fa fa-send-o"></span>
              <span></span>
            </div>
            <div>
              <i className="fa fa-smile-o"></i>
              <textarea></textarea>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
