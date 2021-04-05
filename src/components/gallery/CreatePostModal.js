import { CONSTANTS } from '../common/constants'

const CreatePostModal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="create-post-modal">
        <div className="header">
          <h3>Create Post</h3>
          <button><i class="material-icons">&#xe5cd;</i></button>
        </div>
        <div id="previewPost">
          <textarea id="postCaption" placeholder="Add Caption..."></textarea>
          <img src={CONSTANTS.PHOTOURL} id="photoEntry" alt="gallery" />
        </div>
        <div className="post-options">
          <span>Add To Your Post</span>
          <input type="file" id="addPhoto" />
          <label for="addPhoto">
            <i className="material-icons" id="photoIcon">&#xe413;</i>
          </label>
          <span><i className='fas fa-user-tag' id="userTagIcon"></i></span>
          <span><i className="material-icons" id="smilyFaceIcon">&#xe420;</i></span>
        </div>
        <button className="add-post-button">POST</button>
      </div>
    </>
  )
}

export default CreatePostModal
