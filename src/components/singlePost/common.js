import database from '../../database'
import { galleryActions } from '../gallery/slice'

const addPostLike = async (posts, selectedPostIndex, dispatch) => {
  const selectedPost = posts[selectedPostIndex]
  const likesCount = selectedPost.likesCount || 0
  const newData = {...selectedPost, likesCount: likesCount + 1}
  const mutablePostData = [...posts]
  mutablePostData.splice(selectedPostIndex, 1, newData)
  dispatch(galleryActions.addMultiplePosts(mutablePostData))

  await database.posts.update(selectedPost.id, newData)
}

const addCommentToPost = async (posts, selectedPostIndex, dispatch) => {
  const commentValue = document.querySelector('.comment-box').value
  if (commentValue.trim().length >= 1) {
    const commentObject = {
      id: 'id' + Date.parse(new Date()),
      text: commentValue,
      postId: posts[selectedPostIndex].id
    }

    try {
      await database.comments.add(commentObject)
      dispatch(galleryActions.addComment(commentObject))
    } catch(error) {
      console.log(error)
    }
  }

  document.querySelector('.comment-box').value = ''
}

export { addPostLike, addCommentToPost }
