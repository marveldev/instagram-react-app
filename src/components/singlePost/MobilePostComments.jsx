import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'

const MobilePostComments = () => {
  const { goBack } = useHistory()

  return (
    <>
      <div className="mobile-post-comments">
        <div className="header">
          <button onClick={goBack} className="material-icons">&#xe5c4;</button>
          <span>Comments</span>
        </div>
        <div className="content">
          <div className="post-activity">
            <div className="caption-info">
              <img src={ CONSTANTS.PHOTOURL}
                className="nav-photo" alt="profile"
              />
              <div>
                <span className="bio-name">{ CONSTANTS.NAME}</span>
                <span className="text">{'hey'}</span>
              </div>
            </div>
            <div className="comment-output">
              <div className="caption-info">
                <img src={CONSTANTS.PHOTOURL}
                  className="nav-photo" alt="profile"
                />
                <div>
                  <span className="bio-name">{ CONSTANTS.NAME}</span>
                  <span className="text">{'Hey'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-container">
            <img src={ CONSTANTS.PHOTOURL}
              className="nav-photo" alt="profile"
            />
            <textarea className="comment-box"
              placeholder="Add a comment..."
            >
            </textarea>
            <button>Post</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobilePostComments
