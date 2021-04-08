import { CONSTANTS } from '../common/constants'

const CreatePostModal = ({ setPostModal, postModal }) => {
  return (
    <>
      <div className="overlay" onClick={() => setPostModal(false)}></div>
      <div className="create-post-modal">
        <div className="header">
          <h3>Create Post</h3>
          <button type="button" onClick={() => setPostModal(false)}>
            <i className="material-icons">&#xe5cd;</i>
          </button>
        </div>
        <div id="previewPost">
          <textarea id="postCaption" placeholder="Add Caption..."></textarea>
          <img src={postModal?.photoUrl || CONSTANTS.PHOTOURL} id="photoEntry" alt="gallery" />
        </div>
        <div className="post-options">
          <span>Add To Your Post</span>
          <span><i className="material-icons">&#xe413;</i></span>
          <span><i className="material-icons">&#xe420;</i></span>
          <span><i className="material-icons">&#xe0c8;</i></span>
        </div>
        <button className="post-button">POST</button>
      </div>
    </>
  )
}

export default CreatePostModal
