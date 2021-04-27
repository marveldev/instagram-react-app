import Dexie from 'dexie'

const database = new Dexie('Instagram')

database.version(1).stores({
  bio: '++id,name,website,aboutUser,email,PhoneNumber,gender,profilePhoto',
  posts: 'id,photoCaption,photoUrl,likesCount',
  comments: 'id,text,postId'
})

export default database
