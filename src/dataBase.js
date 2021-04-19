import Dexie from 'dexie'

const database = new Dexie('Instagram')
database.version(1).stores({
  bio: '++id,name,website,aboutUser,email,PhoneNumber,gender,profilePhoto'
})

export default database
