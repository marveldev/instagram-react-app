import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Smileys } from '../../common/index'
import database from '../../database'
import { galleryActions } from './slice'

const CreatePostModal = ({ setPostModal, postModal }) => {
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const addPostItem = async() => {
    const photoUrl = document.querySelector('#photoEntry').src
    const photoCaption = document.querySelector('#postCaption').value
    const id = 'id' + Date.parse(new Date())
    const postItem = {
      id,
      photoCaption,
      photoUrl
    }

    try {
      await database.posts.add(postItem)
      dispatch(galleryActions.addPost(postItem))
      setPostModal(false)
    } catch(error) {
      console.log(error)
    }
  }

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
          <img src={postModal?.photoUrl} id="photoEntry" alt="gallery"/>
        </div>
        <div className="post-options">
          <span>Add To Your Post</span>
          <span onClick={() => setSmileyModalIsOpen(true)} className="smiley-icon">
            <i className="material-icons">&#xe420;</i>
          </span>
          {smileyModalIsOpen && <Smileys />}
          <span >
            <i className="material-icons">&#xe0c8;</i>
          </span>
        </div>
        <button className="post-button" onClick={addPostItem}>POST</button>
      </div>
    </>
  )
}

export default CreatePostModal
