import Bio from '../bio/Bio'
import Gallery from '../gallery/Gallery'

const Home = ({ bio, setBio }) => {
  return (
    <>
      <Bio
        bio={bio}
        setBio={setBio}
      />
      <Gallery />
    </>
  )
}

export default Home
