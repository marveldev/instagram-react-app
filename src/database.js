import Dexie from 'dexie'

const database = new Dexie('Instagram')

database.version(2).stores({
  bio: '++id,name,website,aboutUser,email,PhoneNumber,gender,profilePhoto',
  posts: 'id,photoCaption,photoUrl',
  comments: 'id,text,postId',
  postLikes:'id,likesCount'
})

export default database
