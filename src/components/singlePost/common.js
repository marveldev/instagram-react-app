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

export { addPostLike }
